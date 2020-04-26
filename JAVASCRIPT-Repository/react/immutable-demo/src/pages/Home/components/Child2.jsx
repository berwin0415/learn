import React, { memo } from "react";

function Child2(props) {
  console.log("child2 render. props:", props);
  return <div>Child2:{props.data.child2.count}</div>;
}

export default memo(Child2);
