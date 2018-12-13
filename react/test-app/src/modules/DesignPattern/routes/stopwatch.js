import React from "react";

import Bundle from "Client/bundle";

const StopWatch = props => (
  <Bundle load={() => import("../pages/stopWatch")}>
    {Detail => <Detail {...props} />}
  </Bundle>
);

const route = {
  title: "计时器",
  path: "/stopwatch",
  exact: true,
  component: StopWatch
};
export default route;
