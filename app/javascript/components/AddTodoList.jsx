import React, { Component } from "react";

class AddTodoList extends Component {
  // STATE
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
    // const id = new Date().getTime();
    const title = this.state.newTodoList;
    $.post("/todo_lists");
    // const queue = "2/2 done";
    // this.props.onTodoListAdd({ title });
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
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddTodoList;
