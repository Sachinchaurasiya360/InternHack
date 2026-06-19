import axiosInstance from "../../../lib/axios.js";

export const getTemplates = () => axiosInstance.get("/outreach/templates");
export const getLogs = () => axiosInstance.get("/outreach/logs");
export const createLog = (data: object) => axiosInstance.post("/outreach/logs", data);
export const updateLog = (id: number, data: object) => axiosInstance.patch(`/outreach/logs/${id}`, data);
export const deleteLog = (id: number) => axiosInstance.delete(`/outreach/logs/${id}`);