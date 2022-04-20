import React, { Component } from "react";

function TodoList({ details, onDelete }) {
  return (
    <div className="list_list">
      <a className="list_title">{details.title}</a>
      <a className="list_title_part2">{details.queue}</a>
      <button className="delete_todo_list" onClick={() => onDelete(details.id)}>
        X
      </button>
    </div>
  );
}
export default TodoList;
