import React from "react";
import ReactDOM from "react-dom";
import TodoLists from "./TodoLists";

// SET HEADER
const header = <h1 className="header">My List Page</h1>;
ReactDOM.render(header, document.getElementById("header"));

// RENDER LIST AND FORM
ReactDOM.render(<TodoLists />, document.querySelector(".react_content"));
