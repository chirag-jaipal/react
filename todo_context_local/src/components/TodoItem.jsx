import { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { deleteTodo, editTodo, toggleComplete } = useTodo();

  const updateTodo = () => {
    editTodo(todo.id, todoMsg);
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`group flex items-center gap-3 rounded-2xl border px-3 py-2.5 text-sm shadow-lg transition duration-300 ${
        todo.completed
          ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-100"
          : "border-white/10 bg-white/[0.06] text-slate-200 hover:border-white/20 hover:bg-white/[0.1]"
      }`}
    >
      <input
        type="checkbox"
        className="h-4 w-4 cursor-pointer accent-cyan-400"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`min-w-0 w-full rounded-lg border bg-transparent px-2 py-1 outline-none ${
          isTodoEditable
            ? "border-white/20 bg-black/20"
            : "border-transparent"
        } ${todo.completed ? "text-emerald-200/60 line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        type="button"
        aria-label={isTodoEditable ? "Save todo" : "Edit todo"}
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-xs transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            updateTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        type="button"
        aria-label="Delete todo"
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-xs transition hover:border-rose-400/30 hover:bg-rose-400/15"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
