import React from "react";
import { useNavigate } from "react-router-dom";
import "./style";
import avatar from "assets/img/avatar.png";

const Avatar: React.FC = () => {
    const navigator = useNavigate();
    return (
        <div className="avatar" onClick={() => navigator("login")}>
            <img src={avatar} alt="李丙阳" />
        </div>
    );
}

export default Avatar;