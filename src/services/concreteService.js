import API from "./api";

// GET ALL
export const getAllConcrete = () => API.get("/concrete");

// GET BY ID
export const getConcreteById = (id) => API.get(`/concrete/${id}`);

// CREATE
export const createConcrete = (data) => API.post("/concrete", data);

// UPDATE
export const updateConcrete = (id, data) => API.put(`/concrete/${id}`, data);

// DELETE
export const deleteConcrete = (id) => API.delete(`/concrete/${id}`);
