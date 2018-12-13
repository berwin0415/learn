import React from "react";
import PropTypes from "prop-types";
import MajorClock from "./majorClock";

const SplitTimes = ({splits = []}) => {
  return splits.map((v, k) => (
      <MajorClock key={k} milliseconds={v}></MajorClock>
  ))
};
SplitTimes.propTypes = {
  split: PropTypes.arrayOf(PropTypes.number)
};
export default SplitTimes;