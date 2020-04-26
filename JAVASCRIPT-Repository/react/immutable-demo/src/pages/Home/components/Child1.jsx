import React, { memo } from "react";

function Child1(props) {
  console.log("child1 render. props:", props);
return <div>Child1:{props.data.child1.count}</div>;
}

export default memo(Child1);
