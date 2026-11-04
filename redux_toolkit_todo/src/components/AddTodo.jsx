import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    dispatch(addTodo(text));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="add-form">
      <input
        type="text"
        className="todo-input"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="New todo"
      />
      <button type="submit" className="primary-button" disabled={!input.trim()}>
        Add task
      </button>
    </form>
  );
}

export default AddTodo;
