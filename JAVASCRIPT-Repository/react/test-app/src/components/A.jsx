import React, { Component } from "react";
import C from "./C";
export default class A extends Component {
  constructor(props) {
    super(props);
    console.log("Component A constructor.");
  }
  componentWillMount() {
    console.log("Component A componentWillMount.");
  }
  componentDidMount() {
    console.log("Component A componentDidMount.");
  }
  render() {
    console.log("Component A render.");

    return (
      <div>
        A<C></C>
      </div>
    );
  }
}
