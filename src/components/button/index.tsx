import React from "react";
import "./style.less";

export interface IProps {
  /**
   * 加载中
   */
  loading: boolean;
  /**
   * 文案
   */
  text: string;
  /**
   * 按钮类型
   */
  type: "normal" | "other",
  /**
   * 点击事件
   */
  callOnClick: () => void;
  /**
   * 自定义样式
   */
  customStyle?: React.CSSProperties
}

const Button = (props: IProps) => {
  const { text, type, loading, callOnClick, customStyle = {} } = props;
  return (
    <div
      className={`components_button_${type}`}
      style={loading ? { ...customStyle, cursor: "not-allowed", opacity: "0.5" } : customStyle}
      onClick={callOnClick}
    >
      {text}
    </div>
  )
}
export default Button;