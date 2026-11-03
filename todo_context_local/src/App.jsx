import { useEffect, useState } from "react";
import { TodoContextProvider } from "./context";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        todo: todo,
        completed: false,
      },
    ]);
  };

  const editTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo } : prevTodo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo,
      ),
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, createTodo, editTodo, deleteTodo, toggleComplete }}
    >
      <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6">
        <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          <header className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Personal workspace
            </p>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Manage your todos
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                  Keep your day focused, one task at a time.
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-medium text-slate-300">
                {todos.length} {todos.length === 1 ? "task" : "tasks"}
              </span>
            </div>
          </header>
          <div className="mb-6">
            <TodoForm />
          </div>
          <div className="flex flex-col gap-3">
            {todos.length ? (
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            ) : (
              <div className="rounded-2xl border border-dashed border-white/15 bg-black/10 px-6 py-10 text-center">
                <p className="text-3xl" aria-hidden="true">✦</p>
                <p className="mt-3 font-medium text-slate-200">Your list is clear</p>
                <p className="mt-1 text-sm text-slate-500">Add a task above to get started.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </TodoContextProvider>
  );
}

export default App;
