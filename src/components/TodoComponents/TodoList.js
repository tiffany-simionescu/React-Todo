// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const ClearButton = styled.button`
  box-shadow:inset 0px -3px 7px 0px #29bbff;
  background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
  background-color:#2dabf9;
  border-radius:3px;
  border:1px solid #0b0e07;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:15px;
  padding:9px 23px;
  text-decoration:none;
  text-shadow:0px 1px 0px #263666;
  width: 175px;
`;

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo 
          key={todo.id}
          todo={todo}
          toggleTodo={props.toggleTodo}
        />
      ))}
      <ClearButton className="clear-btn" onClick={props.clearTodos}>
        Clear Completed
      </ClearButton>
    </div>
  );
}

export default TodoList;