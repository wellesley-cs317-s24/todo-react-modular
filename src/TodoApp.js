/**
 * This Todo app was adapted by Lyn from two sources
 *   (1) The react.dev todo example at:
 *         https://react.dev/reference/react/useState
 *   (2) The file src2/todoApp4-react.js from Lec 2
 *       of Harvard's EdX CS50 React Native course.
 */

import "./styles.css";
import { useState } from "react";
import ControlPanel from "./ControlPanel.js";
import TaskList from "./TaskList.js";

let nextUid = 2;
const initialTodos = [
  { uid: 0, item: "Buy milk", done: true },
  { uid: 1, item: "Grade Project 1", done: false }
];

export default function TodoApp() {
  // displayed todo items
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(item) {
    setTodos([
      ...todos,
      {
        id: nextUid++,
        item: item,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map((t) => (t.uid === nextTodo.uid ? nextTodo : t)));
  }

  function handleDeleteTodo(todoUid) {
    setTodos(todos.filter((t) => t.uid !== todoUid));
  }

  function Count({ label, num }) {
    return (
      <span class="count">
        {" "}
        {label}: {num}{" "}
      </span>
    );
  }

  return (
    <>
      <h1>Todo App (Modular)</h1>
      <h2>App State</h2>
      <div class="state">{JSON.stringify({ todos: todos }, null, 2)}</div>
      <h2>UI</h2>
      <div class="ui">
        <Count label="tasks" num={todos.length} />
        <Count label="unchecked" num={todos.filter((t) => !t.done).length} />
        <ControlPanel onAddTodo={handleAddTodo} />
        <TaskList
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
    </>
  );
}
