import { observable, action, computed } from "mobx";
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { observer, PropTypes as ObservablePropTypes } from "mobx-react";
import PropTypes from "prop-types";

class Todo {
  id = Math.random();
  @observable title = "";
  @observable finished = false;

  constructor(title) {
    this.title = title;
  }

  @action.bound toggle() {
    this.finished = !this.finished;
  }
}

class Store {
  @observable todos = [];

  @action.bound createTodo(title) {
    this.todos.unshift(new Todo(title));
  }
  @action.bound add() {
    let i = 100;
    while (i > 0) {
      i--;
      this.todos.unshift(new Todo(Math.random()));
    }
  }

  @computed get left() {
    console.log(this.todos);

    return this.todos.filter(todos => !todos.finished).length;
  }
}

const store = new Store();

@observer
class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      finished: PropTypes.bool.isRequired
    }).isRequired
  };
  handleClick(e) {
    this.props.todo.toggle();
  }

  render() {
    const todo = this.props.todo;
    return (
      <>
        <input
          onChange={e => this.handleClick(e)}
          type="checkbox"
          className="toggle"
          checked={todo.finished}
        />
        <span>{todo.title}</span>
      </>
    );
  }
}

@observer
class TodoList extends Component {
  static propTypes = {
    store: PropTypes.shape({
      createTodo: PropTypes.func,
      todos: ObservablePropTypes.observableArrayOf(
        ObservablePropTypes.observableObject
      ).isRequired
    }).isRequired
  };
  state = {
    inputValue: ""
  };
  handleSubmit(e) {
    e.preventDefault();

    const store = this.props.store;
    const inputValue = this.state.inputValue;

    store.createTodo(inputValue);

    this.setState({
      inputValue: ""
    });
  }
  handleChange(e) {
    const inputValue = e.target.value;
    this.setState({
      inputValue
    });
  }
  add() {
    this.props.store.add();
  }
  render() {
    const store = this.props.store;
    const todos = store.todos;

    return (
      <div className="todo-list">
        <header onClick={e => this.add()}>1</header>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            onChange={e => this.handleChange(e)}
            value={this.state.inputValue}
            className="input"
            placeholder="111"
          />
        </form>
        <ul>
          {todos.map(todo => {
            return (
              <li key={todo.id} className="todo-item">
                <TodoItem todo={todo} />
              </li>
            );
          })}
        </ul>
        <footer>{`${store.left} item(s) unfinished`}</footer>
      </div>
    );
  }
}

ReactDOM.render(<TodoList store={store} />, root);
