import { RouteLink } from "container";
import React, { Fragment } from "react";
import { Home, Record, Login } from "pages";
import { Routes, Route } from "react-router-dom";
/**
 * 根组件
 */
const Root: React.FC = () => {
  return (
    <Fragment>
      <RouteLink options={[{ name: "首页", path: "/", key: "home" }, { name: "记录", path: "/record", key: "record" }, { name: "管理员", path: "/login", key: "login" }]} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/record"} element={<Record />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </Fragment>
  );
}
export default Root;