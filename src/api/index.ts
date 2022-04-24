import axios from "axios";
import { login } from "./admin";

// 请求地址
axios.defaults.baseURL= "http://localhost:3000";

export {
    login
}