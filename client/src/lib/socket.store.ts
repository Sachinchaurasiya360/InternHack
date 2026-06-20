import { create } from "zustand";
import { io, Socket } from "socket.io-client";
import { useAuthStore } from "./auth.store";

export interface ChatMessage {
  senderId: number;
  senderName: string;
  text: string;
  timestamp: string;
}

interface SocketState {
  socket: Socket | null;
  isConnected: boolean;
  activeRoom: string | null;
  messages: ChatMessage[];
  buddyOnline: boolean;
  buddyCode: string | null;
  connect: () => void;
  disconnect: () => void;
  joinRoom: (roomId: string) => void;
  leaveRoom: () => void;
  sendMessage: (text: string) => void;
  sendCodeUpdate: (code: string) => void;
  sendModuleFinished: (moduleId: string, title: string) => void;
}

export const useSocketStore = create<SocketState>((set, get) => ({
  socket: null,
  isConnected: false,
  activeRoom: null,
  messages: [],
  buddyOnline: false,
  buddyCode: null,

  connect: () => {
    const { token } = useAuthStore.getState();
    if (!token) return;
    
    if (get().socket) return; // already connected

    const socketUrl = import.meta.env.VITE_API_URL?.replace('/api', '') || "http://localhost:3000";

    const socket = io(socketUrl, {
      auth: { token }
    });

    socket.on("connect", () => {
      set({ isConnected: true, socket });
      
      // If we already have an active room, rejoin it
      const { activeRoom } = get();
      if (activeRoom) {
        socket.emit("join_room", activeRoom);
      }
    });

    socket.on("disconnect", () => {
      set({ isConnected: false });
    });

    socket.on("user_online", () => {
      set({ buddyOnline: true });
    });

    socket.on("user_offline", () => {
      set({ buddyOnline: false });
    });

    socket.on("receive_message", (msg: ChatMessage) => {
      set((state) => ({ messages: [...state.messages, msg] }));
    });

    socket.on("receive_code_update", ({ code }) => {
      set({ buddyCode: code });
    });

    socket.on("receive_module_finished", ({ title }) => {
      import("react-hot-toast").then(({ toast }) => {
        toast.success(`Your buddy just finished ${title}!`, { icon: "🎉" });
      });
    });
  },

  disconnect: () => {
    const { socket } = get();
    if (socket) {
      socket.disconnect();
      set({ socket: null, isConnected: false, activeRoom: null, messages: [], buddyOnline: false });
    }
  },

  joinRoom: (roomId: string) => {
    const { socket, activeRoom } = get();
    if (activeRoom !== roomId) {
      if (socket && activeRoom) {
        socket.emit("leave_room", activeRoom);
      }
      set({ activeRoom: roomId, messages: [], buddyOnline: false, buddyCode: null });
      if (socket) {
        socket.emit("join_room", roomId);
      }
    }
  },

  leaveRoom: () => {
    const { socket, activeRoom } = get();
    if (activeRoom) {
      if (socket) {
        socket.emit("leave_room", activeRoom);
      }
      set({ activeRoom: null, messages: [], buddyOnline: false, buddyCode: null });
    }
  },

  sendMessage: (text: string) => {
    const { socket, activeRoom, messages } = get();
    if (socket && activeRoom) {
      socket.emit("send_message", { roadmapId: activeRoom, text });
      
      const { user } = useAuthStore.getState();
      set({
        messages: [
          ...messages,
          {
            senderId: user?.id || 0,
            senderName: user?.name || "Me",
            text,
            timestamp: new Date().toISOString(),
          },
        ],
      });
    }
  },

  sendCodeUpdate: (code: string) => {
    const { socket, activeRoom } = get();
    if (socket && activeRoom) {
      socket.emit("code_update", { roadmapId: activeRoom, code });
    }
  },

  sendModuleFinished: (moduleId: string, title: string) => {
    const { socket, activeRoom } = get();
    if (socket && activeRoom) {
      socket.emit("module_finished", { roadmapId: activeRoom, moduleId, title });
    }
  }
}));
