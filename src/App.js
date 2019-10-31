import React from 'react';
import styled from 'styled-components';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const MainHeader = styled.h2`
  font-family: Roboto;
  color: white;
`;
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
    }
    this.toggleTodo = this.toggleTodo.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  toggleTodo(todoId) {
    console.log("Toggle Todo: ", todoId);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  }

  clearTodos = () => {
    console.log("Clear Todos");
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  };

  addTodo = todoName => {
    console.log("Add todo: ", todoName);
    this.setState({
      todos: [
        ...this.state.todos,
        {
        task: todoName,
        id: Date.now(),
        completed: false
        }
      ]
    });
  }

  render() {
    return (
      <MainContent>
        <MainHeader>Welcome to your Todo App!</MainHeader>
        <TodoForm addTodo={this.addTodo} />
        <TodoList 
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearTodos={this.clearTodos}
        />
      </MainContent>
    );
  }
}

export default App;
