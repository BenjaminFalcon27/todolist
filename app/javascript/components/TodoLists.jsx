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
  }

  // ADD LIST FUNCTION
  handleAdd = () => {
    $.get("todo_lists.json", (response) =>
      this.setState({ todoLists: response })
    );

    // const todoLists = this.state.todoLists.slice();
    // todoLists.push(todoList);
    // this.setState({ todoLists });
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

  renderTodoLists() {
    // ARRAY OF LISTS
    return this.state.todoLists.map((todoList) => (
      <TodoList
        //SEND KEY/DETAILS/FUNCTION TO THE CLASS TodoList
        key={todoList.id}
        details={todoList}
        onDelete={this.deleteTodoList}
      />
    ));
  }

  renderForm() {
    return <AddTodoList onTodoListAdd={this.handleAdd} />;
  }

  renderJson = (todoList) => {
    const queue = "0/0 done";
    $.get("todo_lists.json", (response) =>
      $.each(response, function (i) {
        const id = response[i].id;
        const title = response[i].title;
        console.log(response[i].title);
        console.log(response[i].id);
        this.state.setState({ id, title, queue });
      })
    );
  };

  render() {
    return (
      <div className="todo_lists">
        {this.renderTodoLists()}
        {this.handleAdd()}
        {this.renderForm()}
      </div>
    );
  }
}

export default TodoLists;
