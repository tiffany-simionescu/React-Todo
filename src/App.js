import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
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
      todo: this.state.todo.filter(todo => {
        return !todo.completed;
      })
    });
  };

  addTodo = todoName => {
    console.log("Add todo: ", todoName);
    this.setState({
      todo: [
        ...this.state.todo,
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
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList 
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearTodos={this.clearTodos}
        />
        {/*  
        <button>Submit</button>
        <button>Clear All</button>
        */}
      </div>
    );
  }
}

export default App;
