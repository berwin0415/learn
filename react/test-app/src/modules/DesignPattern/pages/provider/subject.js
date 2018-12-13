import React from "react";

import ThemeContext from './context'

const ThemeConsumer = ThemeContext.Consumer;

export default class Subject extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {theme => (
          <h1 style={{ color: theme.mainColor }}>{this.props.children}</h1>
        )}
      </ThemeConsumer>
    );
  }
}
