import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <main className="app-shell">
      <section className="todo-card" aria-labelledby="page-title">
        <header className="hero">
          <div className="brand-mark" aria-hidden="true">
            ✓
          </div>
          <div>
            <p className="eyebrow">Daily focus</p>
            <h1 id="page-title">My tasks</h1>
            <p className="subtitle">Keep the important things moving forward.</p>
          </div>
        </header>
        <AddTodo />
        <Todos />
      </section>
    </main>
  );
}

export default App;
