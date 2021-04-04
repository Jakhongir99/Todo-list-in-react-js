import React, { Component } from "react";

export default class TodoItem extends Component {
  state = {
    onEdit: false,
    editValue: this.props.todo.name,
  };

  onEditValueHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  onEditHandler = () => {
    this.setState({ onEdit: true });
  };
  onEditCancelHandler = () => {
    this.setState({ onEdit: false });
  };

  onEditSaveHandle = () => {
    const { editValue } = this.state;
    const { todo, id, onEditSaveHandler } = this.props;
    if (editValue === "") {
      this.setState({ editValue: todo.name });
    } else {
      onEditSaveHandler(editValue, id);
      this.setState({ onEdit: false });
    }
  };
  render() {
    const { todo, btnHandler, completeHandler } = this.props;
    const { onEdit, editValue } = this.state;
    if (onEdit) {
      return (
        <li className="todo__li" key={todo.id}>
          <div className="todo__div">
            <input
              className="todo__edit-value"
              type="text"
              value={editValue}
              name="editValue"
              onChange={this.onEditValueHandler}
            />
            <span>
              <i className="bi bi-save" onClick={this.onEditSaveHandle} />
              <i
                className="bi bi-x-circle"
                onClick={this.onEditCancelHandler}
              />
            </span>
          </div>
        </li>
      );
    } else {
      return (
        <li className="todo__li" key={todo.id}>
          <div className="todo__div">
            <span className="todo__name">{todo.name}</span>
            <span>
              <i className="bi bi-trash" onClick={() => btnHandler(todo.id)} />
              <i className="bi bi-pencil" onClick={this.onEditHandler} />
              <i className="bi bi-check" onClick={completeHandler} />
            </span>
          </div>
        </li>
      );
    }
  }
}
