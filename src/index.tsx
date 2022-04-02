import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "assets/styles/reset.less"
/**
 * react-router-dom已经包含react-router(跨平台)
 * web应用的路由组件都从react-router-dom引入
 */
import Root from "pages/root";
ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById("root")
);