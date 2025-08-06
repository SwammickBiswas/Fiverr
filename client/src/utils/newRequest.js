import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-server-khaki.vercel.app/api",
  withCredentials: true,
});

export default newRequest;
