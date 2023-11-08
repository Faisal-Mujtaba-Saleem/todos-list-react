import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./myComponents/Header";
import { Footer } from "./myComponents/Footer";
import { AddTodo } from "./myComponents/AddTodo";
import { Todos } from "./myComponents/Todos";
import { Info } from './myComponents/Info';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo);


  const onDelete = (todo) => {
    console.log("Deleting todo", todo);

    setTodos(
      todos.filter(
        (elem, index, arr) => {
          return elem !== todo;
        }
      )
    )
    console.log("Deleted", todos);

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log('I am adding this todo', title, desc);

    let sno;
    if (todos.length !== 0) {
      sno = todos[todos.length - 1].sno + 1
    } else {
      sno = 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    console.log(myTodo);

    setTodos([...todos, myTodo])
    console.log(todos);

  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  return (
    <Router>
      <Header title="My Todos List" searchbar={false} />
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        } />

        <Route path="/About" element={
          <Info />
        } />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
