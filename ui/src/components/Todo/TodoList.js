import React, { Fragment } from "react";
import axios from "axios";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todos: [],
    }
  };

  async componentDidMount() {
    const response = await axios.get('http://localhost:3000/api/todos');
    
    this.setState({
      todos: response.data
    });
  };

  render() {
    const todos = this.state.todos;

    return (
      <Fragment>
        <ul>
          {todos.map((todos, index) => (
            <li key={index}>{todos.text}</li>
          ))}
        </ul>
      </Fragment>
    );
  };
}