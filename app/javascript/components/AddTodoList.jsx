import React, { Component } from "react";

class AddTodoList extends Component {
  constructor(props) {
    super(props);

    // STATE
    this.state = {
      newTodoList: "",
    };
  }

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
    const title = this.state.newTodoList;
    // Tab
    let newTodoList = {
      todo_list: { title },
    };
    // POST TO todo_lists_controller, SEND PARAM newTodoList, GET RESPONSE response
    $.post("todo_lists.json", newTodoList, (response) => {
      if (response) {
        console.log(response);
        // RELOAD PAGE
        this.props.onTodoListAdd();
      } else {
        console.log("error handleSubmit");
      }
    });
    // SETSTATE EMPTY AFTER CREATE
    this.setState({ newTodoList: "" });
  };

  render() {
    return (
      <form className="form_add" onSubmit={this.handleSubmit}>
        <input
          value={this.state.newTodoList}
          placeholder="New todoList"
          onChange={this.handleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddTodoList;
