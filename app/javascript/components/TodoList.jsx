import React, { Component } from "react";
//import EditInput from "./EditInput";
import ReactDOM from "react-dom";

class TodoList extends Component {
  // TODOLIST CONSTRUCTOR
  constructor(props) {
    super(props);
    // STATE
    this.state = {
      inputTitle: "",
      editMode: false,
    };
  }

  handleChange = (event) => {
    // INPUT VALUE
    const value = event.currentTarget.value;
    // CHANGE TODOLIST VALUE
    this.setState({ inputTitle: value });
  };

  enableEditMode() {
    this.setState({
      inputTitle: this.props.todoList.title,
      editMode: true,
    });
  }

  // EDIT FUNCTION
  editTodoList() {
    let editTodoList = {
      todo_list: {
        id: this.props.todoList.id,
        title: this.state.inputTitle,
      },
    };
    this.setState({
      editMode: false,
    });
    $.put(
      `/todo_lists/${this.props.todoList.id}.json`,
      editTodoList,
      (response) => {
        console.log(response);
        if (response) {
          this.props.triggerReload();

          console.log("succesfully edited");
        } else {
          console.log("error editTodoList");
        }
      }
    );
  }

  render() {
    return (
      <div className="list_list">
        <a
          className="list_title"
          style={{ display: this.state.editMode ? "none" : "inline" }}
        >
          {this.props.todoList.title}
        </a>
        <a className="list_title_part2">{this.props.todoList.queue}</a>
        <button
          className="delete_todo_list"
          onClick={() => this.props.onDelete(this.props.todoList.id)}
        >
          X
        </button>
        <button
          className="edit_button"
          onClick={this.enableEditMode.bind(this)}
        >
          Edit
        </button>
        <button className="edit_button" onClick={this.editTodoList.bind(this)}>
          Save
        </button>
        <input
          style={{ display: this.state.editMode ? "block" : "none" }}
          className="edit_input"
          placeholder="set a new title"
          value={this.state.inputTitle}
          onChange={this.handleChange}
          onSubmit={() => this.editTodoList(this.props.todoList.id)}
        ></input>
      </div>
    );
  }
}
export default TodoList;
