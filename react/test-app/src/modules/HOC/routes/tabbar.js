import React from "react";

import Bundle from "Client/bundle";

const Tabbar = props => (
  <Bundle load={() => import("../pages/tabbar")}>
    {Tabbar => <Tabbar {...props} />}
  </Bundle>
);

const route = {
  title: "tabbar",
  path: "/tabbar",
  exact: true,
  component: Tabbar
};
export default route;
