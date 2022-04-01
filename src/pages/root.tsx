import React, { Fragment } from "react";
import { Home, Record, Other } from "pages";
import { HeadCol } from "container";
import { Routes, Route } from "react-router-dom";
/**
 * 根组件
 */
const Root = () => {
  return (
    <Fragment>
      <HeadCol options={[{ name: "首页", path: "/", key: "home" }, { name: "记录", path: "/record", key: "record" }, { name: "其他", path: "/other", key: "other" }]} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/record"} element={<Record />} />
        <Route path={"/other"} element={<Other />} />
      </Routes>
    </Fragment>
  );
}
export default Root;