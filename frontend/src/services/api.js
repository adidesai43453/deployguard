import axios from "axios";

const api = axios.create({
  baseURL: "https://deployguard-api.onrender.com",
});

export default api;