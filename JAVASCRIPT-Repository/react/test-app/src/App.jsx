import React from "react";
import A from "./components/A";
import B from "./components/B";
import VitureList from "./components/VitureList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Component App constructor.");
  }
  componentWillMount() {
    console.log("Component App componentWillMount.");
  }
  componentDidMount() {
    console.log("Component App componentDidMount.");
  }
  handleChange = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };
  render() {
    console.log("Component App render.");

    return (
      // <div>
      //   App
      //   <A count={this.state.count} onChange={this.handleChange}></A>
      //   <B count={this.state.count} onChange={this.handleChange}></B>
      // </div>
      <div>
        <VitureList />
      </div>
    );
  }
}
