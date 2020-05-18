import React from 'react';
import TodoItem from './TodoItem'


function TodoList(props){

    return(
        <ul className = "Todo-list">
          {
            props.todos.map(todo => {
              return(
                <TodoItem key = {todo.id} todo = {todo} handleClick = {props.handleClick}></TodoItem>
              )
            })
          }
      </ul>
    )
}

export default TodoList