import React from "react";
import produce from "immer";

export default class Chapter2 extends React.Component {
  state = {
    members: [
      {
        name: "ronffy",
        age: 30,
      },
    ],
  };

  handleAddAge = () => {
    // this.setState((state) => {
    //   const { members } = state;
    //   return {
    //     members: [
    //       {
    //         ...members[0],
    //         age: members[0].age + 1,
    //       },
    //       ...members.slice(1),
    //     ],
    //   };
    // });

    this.setState(
      produce((draft) => {
        draft.members[0].age++;
      })
    );
  };

  render() {
    const { members } = this.state;
    return (
      <div>
        chapter2
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
