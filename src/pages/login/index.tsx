import React, { useState } from "react";
import "./style.less";

interface IAccount {
    username: string;
    password: string;
}

const Login = () => {
    const [account, setAccount] = useState<IAccount>(null);
    return (
        <div className="login_row">
                <React.Fragment>
                    <div className="login_row_col">
                        <label htmlFor="username">用户名:</label>
                        <input type={"text"} name={"username"} onChange={(event) => setAccount({ ...account, username: event.target.value })} />
                    </div>
                    <div className="login_row_col">
                        <label htmlFor="password">密码:</label>
                        <input type={"password"} name={"password"} onChange={(event) => setAccount({ ...account, password: event.target.value })} />
                    </div>
                    <div className="login_row_col">
                        <button>登录</button>
                    </div>
                </React.Fragment>
        </div>
    );
}

export default Login;