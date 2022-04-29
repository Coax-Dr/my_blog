import React from "react";
import ReactDOM from "react-dom";
import { getUniquekey } from "utils";
import MessageWrapper from "./messageWrapper";

const Message = (() => {
    let modal = document.getElementById("modal");
    const messageWrapper = ReactDOM.render(<MessageWrapper />, modal) as any;
    return {
        warn: (content: string) => {
            messageWrapper.addMsg({
                key: getUniquekey(),
                content
            })
        }
    }
})();

export default Message;
