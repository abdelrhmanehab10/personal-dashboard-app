import { useState, useEffect } from "react";
import { Add, Delete, Check } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import "./todo.scss";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoWidget = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo.trim(), completed: false },
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-widget-container">
      <div className="todo-input">
        <TextField
          size="small"
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
        />
        <IconButton onClick={addTodo} className="add-button">
          <Add />
        </IconButton>
      </div>

      <div className="todo-list">
        {todos.slice(0, 4).map((todo) => (
          <div
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <IconButton
              onClick={() => toggleTodo(todo.id)}
              className="check-button"
            >
              <Check />
            </IconButton>
            <span className="todo-text">{todo.text}</span>
            <IconButton
              onClick={() => deleteTodo(todo.id)}
              className="delete-button"
            >
              <Delete />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoWidget;
