import { Server as SocketIOServer, Socket } from "socket.io";
import type { Server as HttpServer } from "http";
import { verifyToken, type JwtPayload } from "./utils/jwt.utils.js";
import { createLogger } from "./utils/logger.js";
import { prisma } from "./database/db.js";

const logger = createLogger("Socket");

interface ServerToClientEvents {
  user_online: (userId: number) => void;
  user_offline: (userId: number) => void;
  receive_message: (payload: { senderId: number; text: string; timestamp: string; senderName?: string }) => void;
  receive_code_update: (payload: { senderId: number; code: string }) => void;
  receive_module_finished: (payload: { senderId: number; moduleId: string; title: string }) => void;
}

interface ClientToServerEvents {
  join_room: (roadmapId: string) => void;
  leave_room: (roadmapId: string) => void;
  send_message: (payload: { roadmapId: string; text: string }) => void;
  code_update: (payload: { roadmapId: string; code: string }) => void;
  module_finished: (payload: { roadmapId: string; moduleId: string; title: string }) => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  user: JwtPayload;
  name: string;
}

let io: SocketIOServer<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;

export function initSocket(server: HttpServer) {
  const allowedOrigins = new Set(
    (process.env["ALLOWED_ORIGINS"] ?? "http://localhost:5173,https://www.internhack.xyz")
      .split(",")
      .map((s) => s.trim()),
  );

  io = new SocketIOServer(server, {
    cors: {
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.has(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
    },
  });

  // Authentication Middleware
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth["token"];
      if (!token) {
        return next(new Error("Authentication error: No token provided"));
      }
      const user = verifyToken(token);
      
      // Optionally fetch user name for chat
      const dbUser = await prisma.user.findUnique({
        where: { id: user.id },
        select: { name: true },
      });
      
      socket.data.user = user;
      socket.data.name = dbUser?.name || "Student";
      next();
    } catch (error) {
      next(new Error("Authentication error: Invalid token"));
    }
  });

  io.on("connection", (socket) => {
    const userId = socket.data.user?.id;
    logger.info(`User connected: ${userId} (Socket: ${socket.id})`);

    // Handle joining a study buddy room (based on roadmapId)
    socket.on("join_room", (roadmapId) => {
      socket.join(`room_${roadmapId}`);
      logger.info(`User ${userId} joined room_${roadmapId}`);
      socket.to(`room_${roadmapId}`).emit("user_online", userId!);
    });

    socket.on("leave_room", (roadmapId) => {
      socket.leave(`room_${roadmapId}`);
      logger.info(`User ${userId} left room_${roadmapId}`);
      socket.to(`room_${roadmapId}`).emit("user_offline", userId!);
    });

    socket.on("send_message", ({ roadmapId, text }) => {
      const timestamp = new Date().toISOString();
      socket.to(`room_${roadmapId}`).emit("receive_message", {
        senderId: userId!,
        senderName: socket.data.name,
        text,
        timestamp,
      });
    });

    socket.on("code_update", ({ roadmapId, code }) => {
      socket.to(`room_${roadmapId}`).emit("receive_code_update", {
        senderId: userId!,
        code,
      });
    });

    socket.on("module_finished", ({ roadmapId, moduleId, title }) => {
      socket.to(`room_${roadmapId}`).emit("receive_module_finished", {
        senderId: userId!,
        moduleId,
        title,
      });
    });

    socket.on("disconnect", () => {
      logger.info(`User disconnected: ${userId} (Socket: ${socket.id})`);
      // Broadcast offline to all rooms this user was in
      socket.rooms.forEach((room) => {
        socket.to(room).emit("user_offline", userId!);
      });
    });
  });

  return io;
}

export function getSocketIo() {
  if (!io) {
    throw new Error("Socket.io is not initialized");
  }
  return io;
}
