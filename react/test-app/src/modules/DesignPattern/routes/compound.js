import React from "react";

import Bundle from "Client/bundle";

const Compound = props => (
  <Bundle load={() => import("../pages/compound")}>
    {Compound => <Compound {...props} />}
  </Bundle>
);

const route = {
  title: "组合组件",
  path: "/compound",
  exact: true,
  component: Compound
};
export default route;
