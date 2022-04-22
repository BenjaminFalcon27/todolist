import React, { Component } from "react";

class TodoList extends Component {
  // TODOLIST CONSTRUCTOR
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list_list">
        <a className="list_title">{this.props.todoList.title}</a>
        <a className="list_title_part2">{this.props.todoList.queue}</a>
        <button
          className="delete_todo_list"
          onClick={() => this.props.onDelete(this.props.todoList.id)}
        >
          X
        </button>
      </div>
    );
  }
}
export default TodoList;
