import React from "react";
import ReactDOM from "react-dom";
import TodoLists from "./TodoLists";
import SearchBar from "./SearchBar";

// RENDER LIST AND FORM
if ($(".react_content").length) {
  // SET HEADER
  const header = <h1 className="header">My TodoList Page (Free use)</h1>;
  ReactDOM.render(header, document.getElementById("header"));
  ReactDOM.render(<TodoLists />, document.querySelector(".react_content"));
}
