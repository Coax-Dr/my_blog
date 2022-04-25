import axios from "axios";

export interface IAccount {
    email: string;
    password: string;
}

const login = (search: IAccount): Promise<{ ok: 0 | 1, [k:string]: any }> => axios.post("/api/admin/login", search);

export {
    login
}