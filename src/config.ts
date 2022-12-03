import axios from "axios";

export const api = axios.create({
  baseURL: "https://",
  withCredentials: true, // default

  headers: { "allow-origin": "*", "Access-Control-Allow-Origin": "true" },
});
