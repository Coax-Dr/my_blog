import React, { useState } from "react";
import { MyButton, MyMessage } from "components";
import { login } from "api";
import "./style.less";

interface IAccount {
    email: string;
    password: string;
}

const Login = () => {
    const [account, setAccount] = useState<IAccount>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const adminLogin = async (account: IAccount) => {
        try {
            // 管理员登录
            const { data } = await login(account);
            // 登录成功
            if (data.ok) {
                
            } else {
                console.log("执行");
            }
        } catch (error) {
            setLoading(false); 
            console.log(error); 
        }
    }
    return (
        <div className="login_row">
            <React.Fragment>
                <div className="login_row_col">
                    <label htmlFor="username">邮箱:</label>
                    <input type={"text"} name={"email"} onChange={(event) => setAccount({ ...account, email: event.target.value })} />
                </div>
                <div className="login_row_col">
                    <label htmlFor="password">密码:</label>
                    <input type={"password"} name={"password"} onChange={(event) => setAccount({ ...account, password: event.target.value })} />
                </div>
                <div className="login_row_col">
                    <MyButton
                        loading={loading}
                        text="登录"
                        type="normal"
                        customStyle={{ flexGrow: 1 }}
                        callOnClick={() => adminLogin(account)}
                    />
                </div>
            </React.Fragment>
        </div>
    );
}

export default Login;