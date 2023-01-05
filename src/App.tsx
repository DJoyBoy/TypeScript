import React, { useEffect, useState } from "react";
import { ITodo } from "./components/interface";
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoLit } from "./components/TodoList";
import "./index.css";

const App: React.FC = () => {
  const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");

  const [todo, setTodo] = useState<ITodo[]>(savedTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  function addHander(title: string) {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };

    setTodo((prev) => [newTodo, ...todo]);
  }
  function toggleHandler(id: number) {
    setTodo((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }

  function removeHandler(id: number) {
    const hoveRemove = window.confirm(
      "Ви точно впевнені що хочете видалити елемент?"
    );
    if (hoveRemove) {
      setTodo((prev) => prev.filter((todo) => todo.id !== id));
    }
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Привіт</h1>
        <TodoForm onAdd={addHander} />
        <TodoLit
          todos={todo}
          onRemov={removeHandler}
          onToggle={toggleHandler}
        />
      </div>
    </>
  );
};

export default App;
