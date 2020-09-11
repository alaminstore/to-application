import React, { Component } from "react";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Work with Hash function" },
      { id: 2, content: "Read on page of the business book" },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
