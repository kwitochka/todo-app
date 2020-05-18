import React from "react";

function TodoItem({todo, handleClick}) {
     let itemClass = ['Todo-item'];

     if(todo.done){
         itemClass.push('done')
     }
  return (
    <li className = {itemClass.join(' ')} >
      <input type="checkbox" onClick = {() => handleClick(todo.id)}/>
      {todo.title}
    </li>
  );
}

export default TodoItem;
