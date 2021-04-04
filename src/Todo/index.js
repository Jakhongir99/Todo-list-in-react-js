import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
export default class Todo extends Component {
  state = {
    todos: [
      { id: Date.now() + 1, name: "jakhongir" },
      { id: Date.now() + 2, name: "Umrzoq" },
      { id: Date.now() + 3, name: "Husan" },
      { id: Date.now() + 4, name: "Jasur" },
      { id: Date.now() + 5, name: "Yaxyo" },
      { id: Date.now() + 6, name: "Ulugbek" },
    ],
    value: "",
  };

  btnHandler = (id) => {
    const { todos } = this.state;
    const idx = todos.findIndex((el) => el.id === id);
    const before = todos.slice(0, idx);
    const after = todos.slice(idx + 1);
    this.setState({ todos: [...before, ...after] });
  };
  completeHandler = (e) => {
    e.target.parentElement.parentElement.classList.toggle("todo__check");
  };

  changeInputHandler = (e) => {
    this.setState({ value: e });
  };

  addTodoHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      name: this.state.value,
    };
    if (this.state.value === "") {
      alert("LOOK Input is Empty !!! ");
      return;
    }
    this.setState(({ todos }) => ({
      todos: todos.concat(newTodo),
      value: "",
    }));
  };

  componentDidUpdate() {
    const { todos } = this.state;
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos !== null) {
      this.setState({ todos });
    }
    if (todos === null || todos.length === 0) {
      this.setState({ todos: this.state.todos });
    }
  }

  onEditSaveHandler = (onEditValue,index) => {
    const {todos} = this.state;
    this.setState({
      todos:todos.forEach((todo,i) => {
        if(i === index) {
          todo.name = onEditValue
          console.log(i,"i");
          console.log(index,"index");
        }
      })
    })
    debugger;
    this.setState({todos});
    debugger;
  }
  render() {
    const { todos, value } = this.state;

    return (
      <div className="todo">
        <TodoForm
          changeInputHandler={this.changeInputHandler}
          value={value}
          addTodoHandler={this.addTodoHandler}
        />
        {todos.length > 0 && (
          <TodoList
            todos={todos}
            btnHandler={this.btnHandler}
            completeHandler={this.completeHandler}
            onEditSaveHandler={this.onEditSaveHandler}
          />
        )}
        {todos.length === 0 && (
          <h1 className="todo__empty">
            TODO LIST IS EMPTY. PLEASE LOAD PAGE 😊
          </h1>
        )}
        <span className="todo__count">Todo list count:{todos.length}</span>
      </div>
    );
  }
}
