import React, { Component } from "react";
import { observable, actionm, action } from "mobx";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { observer, PropTypes as observablePropTypes } from "mobx-react";

class Store {
  @observable cache = {
    queue: []
  };
  @action.bound refresh() {
    this.cache.queue.push(1);
  }
}

const store = new Store();

@observer
class Bar extends Component {
  static propTypes = {
    queue: observablePropTypes.observableArray
  };
  render() {
    const queue = this.props.queue;
    console.log(queue);

    return <span>{queue.length}</span>;
  }
}
@observer
class Foo extends Component {
  static propTypes = {
    cache: observablePropTypes.observableObject
  };
  render() {
    const cache = this.props.cache;

    return (
      <div>
        <button onClick={this.props.refresh}>Refresh</button>
        <Bar queue={cache.queue} />
      </div>
    );
  }
}

ReactDOM.render(
  <Foo cache={store.cache} refresh={store.refresh} />,
  document.getElementById("root")
);
