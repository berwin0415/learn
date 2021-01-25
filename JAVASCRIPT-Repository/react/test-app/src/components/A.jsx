import React, { Component } from "react";
import C from "./C";
export default class A extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Component A constructor.");
  }
  componentWillMount() {
    console.log("Component A componentWillMount.");
  }
  componentDidMount() {
    console.log("Component A componentDidMount.");
  }
  handleClick = () => {
    this.props.onChange()
    setTimeout(() => {
      alert(this.props.count);
    }, 1000);
  };
  render() {
    console.log("Component A render.");

    return (
      <div onClick={this.handleClick}>
        A<C></C>
      </div>
    );
  }
}
