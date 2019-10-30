import React from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
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
  margin: 20px auto;
`;

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: ""
    };
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges = e => {
    this.setState({
      todoName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todoName !== "") {
      this.props.addTodo(this.state.todoName);
      this.setState({
        todoName: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChanges}
          type="text"
          name="todo"
          value={this.state.todoName}
          placeholder="Enter Todo Item"
        />
        <div>
          <AddButton>Add Todo</AddButton>
        </div>
      </form>
    )
  }
}

export default TodoForm;