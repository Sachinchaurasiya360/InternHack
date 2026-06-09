import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:3000";

export const getTeammates = async () => {
  const response = await axios.get(
    `${API_URL}/api/teammates`,
  );

  return response.data;
};

export const createTeammateProfile =
  async (data: {
    skills: string[];
    preferredRole: string;
    techStack: string[];
    availability: string;
    experienceLevel: string;
  }) => {
    const token =
      localStorage.getItem("token");

    const response = await axios.post(
      `${API_URL}/api/teammates/profile`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  };

export const sendInvitation =
  async (
    hackathonId: number,
    receiverId: number,
  ) => {
    const token =
      localStorage.getItem("token");

    const response = await axios.post(
      `${API_URL}/api/teammates/invite`,
      {
        hackathonId,
        receiverId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  };