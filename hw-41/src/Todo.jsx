import { useState } from "react";

export const Todo = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };
  const handleButtonClick = () => {
    const newTodo = {
      name: title,
      id: Math.random(),
      finished: false,
    };
    setTodos([...todos, newTodo]);
    console.log("click", title);
  };
  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div>
      <header>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Enter todo name"
        />
        <button onClick={handleButtonClick}>Add</button>
      </header>
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              {todo.name}
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
