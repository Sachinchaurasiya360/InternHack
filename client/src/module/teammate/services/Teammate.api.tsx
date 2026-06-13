import api from "../../../lib/axios";

// ── Types ────────────────────────────────────────────────────────────────────

export interface TeammateProfile {
  id: number;
  skills: string[];
  preferredRole: string;
  techStack: string[];
  availability: string;
  experienceLevel: string;
  lookingForTeam: boolean;
  user: {
    id: number;
    name: string;
    email: string;
    profilePic?: string;
  };
}

export interface Invitation {
  id: number;
  hackathonId: number;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
  createdAt: string;
  sender?: { id: number; name: string; profilePic?: string };
  receiver?: { id: number; name: string; profilePic?: string };
  senderProfile?: TeammateProfile;
  receiverProfile?: TeammateProfile;
}

export interface ProfileFilters {
  skills?: string;
  techStack?: string;
  preferredRole?: string;
  experienceLevel?: string;
  availability?: string;
}

// ── Profile API ───────────────────────────────────────────────────────────────

export const getTeammates = async (filters?: ProfileFilters): Promise<TeammateProfile[]> => {
  const { data } = await api.get("/api/teammates", { params: filters });
  return data;
};

export const getMyTeammateProfile = async (): Promise<TeammateProfile | null> => {
  const { data } = await api.get("/api/teammates/my-profile");
  return data;
};

export const createTeammateProfile = async (payload: {
  skills: string[];
  preferredRole: string;
  techStack: string[];
  availability: string;
  experienceLevel: string;
  lookingForTeam?: boolean;
}): Promise<TeammateProfile> => {
  const { data } = await api.post("/api/teammates/profile", payload);
  return data;
};

// ── Invitation API ────────────────────────────────────────────────────────────

export const sendInvitation = async (
  hackathonId: number,
  receiverId: number,
): Promise<Invitation> => {
  const { data } = await api.post("/api/teammates/invite", { hackathonId, receiverId });
  return data;
};

export const getReceivedInvitations = async (): Promise<Invitation[]> => {
  const { data } = await api.get("/api/teammates/invitations/received");
  return data;
};

export const getSentInvitations = async (): Promise<Invitation[]> => {
  const { data } = await api.get("/api/teammates/invitations/sent");
  return data;
};

export const acceptInvitation = async (invitationId: number): Promise<Invitation> => {
  const { data } = await api.patch(`/api/teammates/invitations/${invitationId}/accept`);
  return data;
};

export const rejectInvitation = async (invitationId: number): Promise<Invitation> => {
  const { data } = await api.patch(`/api/teammates/invitations/${invitationId}/reject`);
  return data;
};