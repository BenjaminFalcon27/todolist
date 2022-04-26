import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AiFillEdit } from "react-icons/ai";
import { AiFillSave } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

class TodoList extends Component {
  // TODOLIST CONSTRUCTOR
  constructor(props) {
    super(props);
    // STATE
    this.state = {
      inputTitle: "",
      editMode: false,
      searchValue: "",
    };
  }

  // INPUT CHANGE EVENT FUNCTION
  handleChange = (event) => {
    // INPUT VALUE
    const value = event.currentTarget.value;
    // CHANGE TODOLIST VALUE
    this.setState({ inputTitle: value });
  };

  //EDIT MODE TO HIDE INPUT AND SAVE
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

  handleSearch() {
    const value = document.getElementById("research").value;
    this.setState({ searchValue: value });
  }

  render() {
    return (
      <div className="list_list">
        <a
          className="list_title"
          style={{ display: this.state.editMode ? "none" : "inline" }}
          href={`/todo_lists/${this.props.todoList.id}`}
        >
          {this.props.todoList.title}
        </a>

        <button
          className="delete_todo_list"
          onClick={() => this.props.onDelete(this.props.todoList.id)}
        >
          <AiFillDelete />
        </button>
        <div className="edit_button">
          <button onClick={this.enableEditMode.bind(this)}>
            <AiFillEdit />
          </button>
        </div>
        <input
          style={{ display: this.state.editMode ? "inline" : "none" }}
          className="edit_input"
          placeholder="set a new title"
          value={this.state.inputTitle}
          onChange={this.handleChange}
          onSubmit={() => this.editTodoList(this.props.todoList.id)}
        ></input>
        <button
          onClick={this.editTodoList.bind(this)}
          style={{ display: this.state.editMode ? "inline" : "none" }}
        >
          <AiFillSave />
        </button>
      </div>
    );
  }
}
export default TodoList;
