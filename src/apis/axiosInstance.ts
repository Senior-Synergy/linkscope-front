import axios from "axios";

const baseURL = process.env.APP_API_BASE_URL;

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
