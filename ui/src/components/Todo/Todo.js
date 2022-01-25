import React, { Fragment } from "react";

import TodoList from "./TodoList";

export default class Todo extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>To-do List</h1>
        
        <TodoList />
      </Fragment>
    );
  }
}