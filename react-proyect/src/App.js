import React from "react";

import "./App.css";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodoButton } from "./components/CreateTodo/CreateTodoButton";

function App() {
  const defaultTodos = [
    {
      text: "Comer sano",
      completed: true,
    },
    {
      text: "Hacer ejercicio 4 veses a la semana",
      completed: false,
    },
    {
      text: "Pasear perrito 'loki' ",
      completed: false,
    },
    {
      text: "Estudiar 3 horas diarías",
      completed: false,
    },
    {
      text: "hacer ejercicio con pesas",
      completed: true,
    },
    {
      text: "meditar media hora",
      completed: false,
    },
    {
      text: " Regar las plantas",
      completed: false,
    },
    {
      text: "Tomar 3 litros de agua diaríos",
      completed: false,
    },
  ];

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const totalTodos = todos.length;
  const completedTodos = todos.filter((item) => !!item.completed).length;
  const todosSearch = todos.filter((item) =>
    item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {todosSearch.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;

