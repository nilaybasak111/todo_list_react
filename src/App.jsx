import "./App.css";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Components
import Header from "./MyComponents/Header";
// We are not used default export. So we are importing Todos & Footer Like This
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // Create addtodo function to Add a Todo on Todo List
  const addtodo = (title, desc) => {
    // console.log("I am adding this todo ", title, desc)

    let sno = todos.length ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    // Here We add Todo with Existing Todos
    setTodos([...todos, myTodo]);
    //console.log(myTodo);
  };

  // Create onDelete function to Delete a Todo
  const onDelete = (todo) => {
    //console.log("I am onDelete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        {/* Here We Passing Parent Component to Child Component */}
        <Header title="Todo List React" searchBar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addtodo={addtodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
