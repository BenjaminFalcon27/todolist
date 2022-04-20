import React, { Component } from "react";

class AddTodoList extends Component {
  state = {
    newTodoList: "",
  };

  handleChange = (event) => {
    // INPUT VALUE
    const value = event.currentTarget.value;
    // CHANGE TODOLIST VALUE
    this.setState({ newTodoList: value });
  };

  // WHEN INPUT IS USED
  handleSubmit = (event) => {
    event.preventDefault();

    // SETTERS
    const id = new Date().getTime();
    const title = this.state.newTodoList;
    const queue = "2/2 done";
    this.props.onTodoListAdd({ id, title, queue });
    this.setState({ newTodoList: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.newTodoList}
          placeholder="add a list"
          onChange={this.handleChange}
        ></input>
        <button>Add</button>
      </form>
    );
  }
}

export default AddTodoList;
