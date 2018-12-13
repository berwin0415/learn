import React, { Component } from "react";
import Subject from './subject'

import ThemeContext from './context'
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;



export default class StopWatch extends Component {
  render() {
    return (
      <ThemeProvider value={{ mainColor: "green", textColor: "red" }}>
        <Page />
      </ThemeProvider>
    );
  }
}

const Paragraph = (props, context) => {
  return (
    <ThemeConsumer>
      {theme => <p style={{ color: theme.textColor }}>{props.children}</p>}
    </ThemeConsumer>
  );
};

const Page = () => (
  <div>
    <Subject>这是标题</Subject>
    <Paragraph>这是正文</Paragraph>
  </div>
);
