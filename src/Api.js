// Api.js
import axios from "axios";

const baseURL = "https://sue-backend.onrender.com/api";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${baseURL}/register`, formData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
