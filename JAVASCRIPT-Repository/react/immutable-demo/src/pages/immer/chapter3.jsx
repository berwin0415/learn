import React from "react";
import { connect } from "react-redux";

class Chapter3 extends React.Component {
  handleAddAge = () => {
    this.props.addAge();
  };

  render() {
    console.log('render chapter3')
    const {
      immer: { members },
    } = this.props;
    return (
      <div>
        chapter3
        <div onClick={this.handleAddAge}>add someone age</div>
        <div>
          {members.map((item) => (
            <div key={item.name}>{`${item.name} : ${item.age}`}</div>
          ))}
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => ({ immer: state.immer }),
  (dispatch) => {
    return {
      addAge() {
        dispatch({ type: "ADD_AGE" });
      },
    };
  }
)(Chapter3);
