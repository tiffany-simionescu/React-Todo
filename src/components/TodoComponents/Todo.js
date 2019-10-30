import React from 'react';
import styled from 'styled-components';

// const MainContent = styled.div`
//   font-family: Roboto;
//   width: 50px;
//   background-color: green;
//   text-align: center;
//   margin: 10px auto;
//   padding: 5px;
//   border-radius: 5px;
//   color: white;
// `;

const Todo = props => {
  let todoClassName = "todo"
  if(props.todo.completed) {
    todoClassName = todoClassName + " completed";
  }

  const handleClick = () => {
    props.toggleTodo(props.todo.id);
  };

  return (
    <div className={todoClassName} onClick={handleClick}>
      <p>{props.todo.task}</p>
    </div>
  );
}

export default Todo;