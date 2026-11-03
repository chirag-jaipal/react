import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { createTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    createTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex rounded-2xl border border-white/10 bg-black/20 p-1.5 shadow-inner shadow-black/20">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="min-w-0 w-full bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500"
      />
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
      >
        Add task
      </button>
    </form>
  );
}

export default TodoForm;
