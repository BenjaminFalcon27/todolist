import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import AddTodoList from "./AddTodoList";
import SearchBar from "./SearchBar";

class TodoLists extends React.Component {
  // STATE
  constructor(props) {
    super(props);
    this.state = {
      todoLists: [],
      search: "",
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
    $.delete(`/todo_lists/${id}.json`, (response) => {
      console.log(response);
      if (response) {
        this.reloadTodoLists();
        console.log("succesfully deleted");
      } else {
        console.log("Error deleteTodoList");
      }
    });
  }

  updateSearch(value) {
    this.setState({ search: value });
  }

  renderTodoLists() {
    // ARRAY OF LISTS
    return this.state.todoLists
      .filter((todoList) => todoList.title.indexOf(this.state.search) >= 0)
      .map((todoList) => (
        <TodoList
          //SEND KEY/DETAILS/FUNCTION TO THE CLASS TodoList
          key={todoList.id}
          todoList={todoList}
          onDelete={this.deleteTodoList.bind(this)}
          triggerReload={this.reloadTodoLists.bind(this)}
        />
      ));
  }

  renderForm() {
    return <AddTodoList onTodoListAdd={this.reloadTodoLists.bind(this)} />;
  }

  renderSearchBar() {
    return (
      <SearchBar
        search={this.state.search}
        onChange={this.updateSearch.bind(this)}
      />
    );
  }

  render() {
    return (
      <div className="todo_lists">
        {this.renderSearchBar()}
        {this.renderTodoLists()}
        {this.renderForm()}
      </div>
    );
  }
}

export default TodoLists;
