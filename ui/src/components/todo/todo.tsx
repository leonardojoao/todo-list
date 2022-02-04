import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../types/redux/todo';

function TodosList({ todos }: State) {
  return (
    <>
      <h1>Todo</h1>

      {todos.map((todo: string, i: number) => (
        <p key={i}> {todo} </p>
      ))}
    </>
  );
}

interface Juca {
  todo: State;
}

function mapStateToProps( { todo }: Juca) {
  return todo
}

export default connect( mapStateToProps )(TodosList);
