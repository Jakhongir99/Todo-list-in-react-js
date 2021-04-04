import React from "react";
const TodoForm = (props) => {
  const { value, addTodoHandler, changeInputHandler } = props;
  return (
    <>
      <h1 className="todo__title">TODO LIST</h1>
      <form className="todo__form" onSubmit={addTodoHandler}>
        <input value={value} onChange={(e) => changeInputHandler(e.target.value)} />
        <button>Add todo</button>
      </form>
    </>
  );
};

export default TodoForm;
