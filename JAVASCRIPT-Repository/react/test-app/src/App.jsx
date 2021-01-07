import React from "react";
import A from "./components/A";
import B from "./components/B";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Component App constructor.");
  }
  componentWillMount() {
    console.log("Component App componentWillMount.");
  }
  componentDidMount() {
    console.log("Component App componentDidMount.");
  }
  render() {
    console.log("Component App render.");

    return (
      <div>
        App
        <A></A>
        <B></B>
      </div>
    );
  }
}
