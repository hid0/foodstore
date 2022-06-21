import Axios from "axios";
import { config } from "../config";

export async function registerUser(data) {
  return await Axios.post(`${config.api_host}/auth/register`, data);
}

export async function login(email, password) {
  return await Axios.post(`${config.api_host}/auth/login`, { email, password });
}

export async function logout() {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await Axios.post(`${config.api_host}/auth/logout`, null, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    localStorage.removeItem("auth");
    return response;
  });
}
