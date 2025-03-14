import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/auth"; 

export const loginUser = async (formData: { [key: string]: string }) => {
  const response = await axios.post(`${API_BASE_URL}/login`, formData, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const registerUser = async (formData: { [key: string]: string }) => {
  const response = await axios.post(`${API_BASE_URL}/register`, formData, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
