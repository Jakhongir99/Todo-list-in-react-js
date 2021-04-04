import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoBody extends Component {
  render() {
    const {
      todos,
      btnHandler,
      completeHandler,
      onEditSaveHandler
    } = this.props;
    return (
      <ul className="todo__ul">
        {todos.map((todo,index) => {
         return <TodoItem todo={todo} btnHandler={btnHandler} completeHandler={completeHandler} key={todo.id} onEditSaveHandler={onEditSaveHandler} id={index} />
        })}
      </ul>
    );
  }
}

export default TodoBody;
