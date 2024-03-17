import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3005/api",
});

export default axiosInstance;
