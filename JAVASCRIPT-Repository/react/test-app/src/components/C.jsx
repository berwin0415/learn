import React, { Component } from "react";

export default class C extends Component {
  constructor(props) {
    super(props);
    console.log("Component C constructor.");
  }
  componentWillMount() {
    console.log("Component C componentWillMount.");
  }
  componentDidMount() {
    console.log("Component C componentDidMount.");
  }
  render() {
    console.log("Component C render.");

    return <div>C</div>;
  }
}
