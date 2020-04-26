import axios from "axios";
import { baseApi } from "./config"
const service = axios.create({
    baseURL: baseApi,
    timeout: 50 * 1000
});

export default service;