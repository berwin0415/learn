import React from "react";
import { connect } from "react-redux";
import StopWatch from './stopWatch'

class Home extends React.Component {
  render() {
    return <StopWatch></StopWatch>
  }
}
export default connect(
  state => ({
    state
  }),
  dispatch => ({
    dispatch
  })
)(Home);
