import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import AddTodoList from "./AddTodoList";

class TodoLists extends React.Component {
  // STATE
  constructor(props) {
    super(props);
    this.state = {
      todoLists: [],
    };
    // SHOW LIST 1st LOAD
    this.reloadTodoLists();
  }

  // ADD LIST FUNCTION
  reloadTodoLists() {
    $.get("todo_lists.json", (response) =>
      this.setState({ todoLists: response })
    );
  }

  // DELETE FUNCTION
  deleteTodoList(id) {
    // STATE COPY
    const todoLists = this.state.todoLists.slice();

    //FRONT PART
    // FIND TODOLIST BY ID
    const i = todoLists.findIndex((todoList) => todoList.id === id);
    console.log(i);

    //BACK PART
    const listId = id;
    console.log(listId);

    $.delete(`/todo_lists/${listId}.json`, (response) => {
      console.log(response);
      if (response) {
        // console.log("Success");
        // // DELETE THE TODOLIST BY INDEX
        // todoLists.splice(i, 1);
        // // UPDATE STATE
        // this.setState({ todoLists });
        this.reloadTodoLists();
        console.log("succesfully deleted (Front)");
      } else {
        console.log("Error");
      }
    });
  }

  renderTodoLists() {
    // ARRAY OF LISTS
    return this.state.todoLists.map((todoList) => (
      <TodoList
        //SEND KEY/DETAILS/FUNCTION TO THE CLASS TodoList
        key={todoList.id}
        todoList={todoList}
        onDelete={this.deleteTodoList.bind(this)}
      />
    ));
  }

  renderForm() {
    return <AddTodoList onTodoListAdd={this.reloadTodoLists} />;
  }

  render() {
    return (
      <div className="todo_lists">
        {this.renderTodoLists()}
        {this.renderForm()}
      </div>
    );
  }
}

export default TodoLists;
