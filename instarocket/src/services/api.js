import axios from "axios";

const baseURL = "http://10.1.1.36:3333";

const api = axios.create({
  baseURL
});

export default api;

export { baseURL };
