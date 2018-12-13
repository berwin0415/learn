import React from "react";

import Bundle from "Client/bundle";

const Provider = props => (
  <Bundle load={() => import("../pages/provider")}>
    {Provider => <Provider {...props} />}
  </Bundle>
);

const route = {
  title: "提供者模式",
  path: "/provider",
  exact: true,
  component: Provider
};
export default route;
