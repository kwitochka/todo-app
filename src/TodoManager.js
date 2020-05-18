import React from "react";
import Button from "./Button";
import TodoList from "./TodoList"

export default function TodoManager(props) {
  return (
    <div id="Todo-manager">
      <TodoList todos={props.todos} handleClick={props.toggleTodo} />
      <div className="Todo-controller">
        <Button text="Delete all" handleClick={props.deleteAllTodos} />
        <Button text="Delete completed" handleClick={props.deleteCompletedTodos} />
      </div>
    </div>
  );
}
