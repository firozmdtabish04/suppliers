import API from "./api";

export const getAllHalls = () => API.get("/hall");

export const createHall = (data) => API.post("/hall", data);

export const deleteHall = (id) => API.delete(`/hall/${id}`);

export const updateHall = (id, data) => API.put(`/hall/${id}`, data);
