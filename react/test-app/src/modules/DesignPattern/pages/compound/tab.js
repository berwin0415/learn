import React from "react";

export default class Tabs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activeIndex: 0
        }
    }
    render(){
        const newChildren = React.Children.map(this.props.children, (child,index) => {
            if(child.type) {
                return React.cloneElement(child, {
                    active: this.state.activeIndex === index,
                    onClick: () => this.setState({activeIndex: index})
                })
            }else{
                return child
            }
        })
        return (
            <>
                {newChildren}
            </>
        )
    }
}

Tabs.Item = props => {
  const { active, onClick } = props;
  const tabStyle = {
    "maxWidth": "150px",
    color: active ? "red" : "green",
    border: active ? "1px red solid" : "0px"
  };
  return (
    <h1 style={tabStyle} onClick={onClick}>
      {props.children}
    </h1>
  );
};
