import React, { Component } from "react";

import MajorClock from "./majorClock";
import ControlButton from "./controlButton";
import SplitTimes from "./splitTimes";

export default class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      startTime: null,
      currentTime: null,
      splits: []
    };
    // this.onStart = this.onStart.bind(this);
    // this.onPause = this.onPause.bind(this);
    // this.onReset = this.onReset.bind(this);
    // this.onSplit = this.onSplit.bind(this);
  }
  onStart = () => {
    this.setState({
      isStarted: true,
      startTime: new Date(),
      currentTime: new Date(),
    });

    this.intervalHandle = setInterval(() => {
      this.setState({currentTime: new Date()});
    }, 1000 / 60);
  }

  onPause = () => {
    clearInterval(this.intervalHandle);
    this.setState({
      isStarted: false,
    });
  }

  onReset = () => {
    this.setState({
      startTime: null,
      currentTime: null,
      splits: [],
    });
  }
  onSplit(){
    const { splits, currentTime, startTime } = this.state;
    this.setState({
      splits: [...splits, currentTime - startTime]
    });
  }
  render() {
    return (
      <>
        <MajorClock milliseconds={this.state.currentTime - this.state.startTime}/>
        <ControlButton onSplit={this.onSplit.bind(this)} onStart={this.onStart} onReset={this.onReset} onPause={this.onPause} activated={this.state.isStarted}/>
        <SplitTimes splits={this.state.splits}/>
      </>
    );
  }
}
