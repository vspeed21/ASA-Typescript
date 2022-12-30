import axios from "axios";

const adminClient = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
})

export default adminClient;