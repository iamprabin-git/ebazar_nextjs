import axios from "axios";
import config from "@/config";

const api = axios.create({
  baseURL: config.apiUrl,
});

// Add token dynamically before every request
api.interceptors.request.use((req) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("authToken");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  }
  return req;
});

export default api;
