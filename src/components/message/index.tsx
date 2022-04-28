import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.less";

const modal = document.getElementById("#modal");

const Message = () => {
    const message = document.createElement("div");
    message.className = "components_message";
    message.innerText = "登陆失败";
    useEffect(() => {
    }, [])
    ReactDOM.createPortal(message, modal);
}

export default Message;
