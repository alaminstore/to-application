import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Work with Hash function" },
      { id: 2, content: "Read on page of the business book" },
    ],
  };

  deleteTodo = (id) => {
    const newtodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: newtodos,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    const allTodo = [...this.state.todos, todo];
    this.setState({
      todos: allTodo,
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
