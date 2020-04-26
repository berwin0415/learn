import React, { memo } from "react";
import { connect } from "react-redux";

import produce from "immer";

function Chapter1(props) {
  const baseState = [
    {
      todo: "Learn typescript",
      done: true,
    },
    {
      todo: "Try immer",
      done: false,
    },
  ];

  const nextState = produce(baseState, (draftState) => {
    draftState.push({ todo: "Tweet about it" });
    draftState[1].done = true;
  });

  console.log("baseState.length:", baseState.length);
  console.log("nextState.length:", nextState.length);

  console.log("baseState[1].done:", baseState[1].done);
  console.log("nextState[1].done:", nextState[1].done);

  console.log("比较baseState[0]与nextState[0]:", baseState[0] === nextState[0]);
  console.log("比较baseState[1]与nextState[1]:", baseState[1] === nextState[1]);

  //   nextState是自动冻结的
  //   nextState[1].done = false;

  return <div>Chapter1</div>;
}

export default connect((state) => ({ demo1: state.demo1 }))(memo(Chapter1));
