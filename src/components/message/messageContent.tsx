import React from "react";
import "./style.less";

export interface IProps {
  content: string;
  type: string;
  onDel: () => void;
}

const MessageContent = (props: IProps) => {
  const { content, onDel } = props;
  return (
    <div className="message">
      <div className="message_content" onAnimationEnd={onDel}>
        {content}
      </div>
    </div>
  )
}

export default MessageContent;
