import axios from "axios";
import { toast } from "react-toastify";






export const Axios = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use((request: any) => {
  request.headers = {
    ...request.headers,
    Authorization: sessionStorage.getItem("token") || null,
  };
  return request;
});

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      toast.error("Erro de requisição. Nova autenticação necessária");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);