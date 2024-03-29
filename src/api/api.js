import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const token = localStorage.getItem("token");

export const axiosApi = axios.create({
  baseURL: "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/",
  headers: token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {},
});

// axiosApi.defaults.headers.common["Authorization"] = AUTH_TOKEN;
