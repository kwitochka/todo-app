import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoManager from './TodoManager'

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(val) {
    setTodos(
      todos.concat([
        {
          id: new Date().getUTCMilliseconds(),
          title: val,
          done: false,
        },
      ])
    );

    // localStorage.set('todo', todos);

    console.log(todos);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
  }

  function deleteAllTodos() {
    setTodos([]);
  }

  function deleteCompletedTodos() {
    setTodos(todos.filter((todo) => !todo.done));
  }

  return (
    <div className="App">
      <Header text="to do list"></Header>
      <AddTodo handleKeydown={addTodo} />
      
        {todos.length ? (
          <TodoManager 
          todos = {todos}
          toggleTodo = {toggleTodo}
          deleteAllTodos = {deleteAllTodos} 
          deleteCompletedTodos = {deleteCompletedTodos}  
          />
        ) : (
          <p>You can accomplish anything you want!</p>
        )}
        

    </div>
  );
}

export default App;
