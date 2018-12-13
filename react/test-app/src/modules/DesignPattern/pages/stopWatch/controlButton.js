import React from "react";
import PropTypes from "prop-types";
import "./ControlButtons.css";

// const ControlButton = ({activated, onStart, onPause, onReset, onSplit}) => {
//     if(activated) {
//         return (
//             <div>
//                 <button onClick={onSplit}>计次</button>
//                 <button onClick={onPause}>停止</button>
//             </div>
//         )
//     }else {
//         return (
//             <div>
//                 <button onClick={onReset}>复位</button>
//                 <button onClick={onStart}>启动</button>
//             </div>
//         )
//     }
//   };
class ControlButton extends React.Component {
  render() {
      const {activated, onStart, onPause, onReset, onSplit} = this.props
    if (activated) {
      return (
        <div>
          <button className="left-btn" onClick={onSplit}>计次</button>
          <button className="right-btn" onClick={onPause}>停止</button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="left-btn" onClick={onReset}>复位</button>
          <button className="right-btn" onClick={onStart}>启动</button>
        </div>
      );
    }
  }
}
ControlButton.propTypes = {
  activated: PropTypes.bool,
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onSplit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};
export default ControlButton;
