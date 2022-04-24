import axios from "axios";

export interface IAccount {
    email: string;
    password: string;
}

const login = (search: IAccount) => axios.post("/api/admin/login", search);

export {
    login
}