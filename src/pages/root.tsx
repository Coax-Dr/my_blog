import React, { Fragment } from "react";
import { Home, Record, Login } from "pages";
import { HeadCol } from "container";
import { Routes, Route } from "react-router-dom";
/**
 * 根组件
 */
const Root: React.FC = () => {
  return (
    <Fragment>
      <HeadCol options={[{ name: "首页", path: "/", key: "home" }, { name: "记录", path: "/record", key: "record" }]} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/record"} element={<Record />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </Fragment>
  );
}
export default Root;