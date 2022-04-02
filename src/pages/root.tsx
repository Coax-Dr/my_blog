import { HeadCol } from "container";
import React, { Fragment } from "react";
import { Home, Record } from "pages";
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
      </Routes>
    </Fragment>
  );
}
export default Root;