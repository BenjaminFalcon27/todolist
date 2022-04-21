import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import AddTodoList from "./AddTodoList";

class TodoLists extends React.Component {
  // STATE
  state = {
    todoLists: [
      { id: 1, title: "Todolist1", queue: "2/2 done" },
      { id: 2, title: "Todolist2", queue: "2/7 done" },
      { id: 3, title: "Todolist3", queue: "0/2 done" },
      { id: 4, title: "Todolist4", queue: "3/4 done" },
      { id: 5, title: "Todolist5", queue: "1/2 done" },
      { id: 6, title: "Todolist6", queue: "1/4 done" },
    ],
  };

  // ADD LIST FUNCTION
  handleAdd = (todoList) => {
    $.get("todo_lists.json", (response) =>
      this.setState({ todoLists: response })
    );

    //const todoLists = this.state.todoLists.slice();
    //todoLists.push(todoList);
    //this.setState({ todoLists });
  };

  // DELETE FUNCTION
  deleteTodoList = (id) => {
    // STATE COPY
    const todoLists = this.state.todoLists.slice();

    // FIND TODOLIST BY ID
    const i = todoLists.findIndex((todoList) => todoList.id === id);
    // DELETE THE TODOLIST BY INDEX
    todoLists.splice(i, 1);
    // UPDATE STATE
    this.setState({ todoLists });
  };

  //   renderTodoLists() {
  //     // ARRAY OF LISTS
  //     return this.state.todoLists.map((todoList) => (
  //       <TodoList
  //         //SEND KEY/DETAILS/FUNCTION TO THE CLASS TodoList
  //         key={todoList.id}
  //         details={todoList}
  //         onDelete={this.deleteTodoList}
  //       />
  //     ));
  //   }

  renderTodoLists = (todoList) => {
    $.get("todo_lists.json", (response) =>
      this.setState({ todoLists: response })
    );
  };

  renderForm() {
    return <AddTodoList onTodoListAdd={this.handleAdd} />;
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
