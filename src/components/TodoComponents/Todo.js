import React from 'react';

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