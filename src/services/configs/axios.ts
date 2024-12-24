import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 30000, // value in ms: 30s
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
})

export default axiosClient;