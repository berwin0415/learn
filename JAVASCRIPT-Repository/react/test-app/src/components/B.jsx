import React, { Component, useState } from "react";

// export default class B extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Component B constructor.");
//   }
//   componentWillMount() {
//     console.log("Component B componentWillMount.");
//   }
//   componentDidMount() {
//     console.log("Component B componentDidMount.");
//   }
//   render() {
//     console.log("Component B render.");

//     return <div>B</div>;
//   }
// }
export default function B(props) {
  const handleClick = () => {
    props.onChange();
    setTimeout(() => {
      alert(props.count);
    }, 1000);
  };
  return <div onClick={handleClick}>B</div>;
}
