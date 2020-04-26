import React, { memo } from "react";
import { connect } from "react-redux";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import { plus } from "../../store/actions";
import produce from "immer";
function Home(props) {
  const { demo1, plus } = props;
  console.log("Home render,props:", props);
  const handleClick1 = () => {
    plus({ child1: { count: demo1.child1.count + 1 } });
  };
  let currentState = {
    p: {
      x: [2],
    },
  };
  let o1 = produce(currentState, (draft) => {
    draft.p.x = 1;
  });
  let o2 = produce(o1, (draft) => {
    draft.q = 1;
  });
  //   let o2 = o1
  //   o2.p.x =2
  console.log("immer", o1, o2, o1 === o2);
  console.log("immer2", o1.p === o2.p);

  return (
    <div>
      <Child1 className="c1" data={demo1}></Child1>
      <Child2 className="c2" data={demo1}></Child2>
      <button onClick={handleClick1}>add child1</button>
    </div>
  );
}

export default connect((state) => ({ demo1: state.demo1 }), { plus })(
  memo(Home)
);
