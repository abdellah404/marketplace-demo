import axios from "axios";


  const persistedAuth = JSON.parse(localStorage.getItem("persist:auth"));
  const token = persistedAuth ? JSON.parse(persistedAuth.token) : null;

  
  const axioService = axios.create({
  baseURL: "https://3e78-197-146-8-196.ngrok-free.app/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default axioService;