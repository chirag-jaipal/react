import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editTodo,
  removeTodo,
  toggleComplete,
} from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const completedCount = todos.filter((todo) => todo.completed).length;

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditText("");
  };

  const saveEdit = (id) => {
    const text = editText.trim();
    if (!text) return;

    dispatch(editTodo({ id, text }));
    cancelEditing();
  };

  const handleEditKeyDown = (event, id) => {
    if (event.key === "Enter") saveEdit(id);
    if (event.key === "Escape") cancelEditing();
  };

  return (
    <section className="todo-list-section" aria-labelledby="task-list-title">
      <div className="list-heading">
        <div>
          <h2 id="task-list-title">Your tasks</h2>
          <p>
            {todos.length === 0
              ? "Start with one small step."
              : `${completedCount} of ${todos.length} completed`}
          </p>
        </div>
        {todos.length > 0 && (
          <span className="task-count" aria-label={`${todos.length} tasks`}>
            {todos.length}
          </span>
        )}
      </div>

      {todos.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon" aria-hidden="true">
            ✦
          </span>
          <p>No tasks yet</p>
          <span>Add something above to get started.</span>
        </div>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li
              className={`todo-item ${todo.completed ? "is-complete" : ""}`}
              key={todo.id}
            >
              <button
                type="button"
                className="check-button"
                onClick={() => dispatch(toggleComplete(todo.id))}
                aria-label={
                  todo.completed
                    ? `Mark ${todo.text} active`
                    : `Complete ${todo.text}`
                }
                aria-pressed={todo.completed}
              >
                {todo.completed && "✓"}
              </button>
              {editingId === todo.id ? (
                <input
                  className="edit-input"
                  value={editText}
                  onChange={(event) => setEditText(event.target.value)}
                  onKeyDown={(event) => handleEditKeyDown(event, todo.id)}
                  aria-label={`Edit ${todo.text}`}
                  autoFocus
                />
              ) : (
                <span className="todo-text">{todo.text}</span>
              )}
              <div className="todo-actions">
                {editingId === todo.id ? (
                  <button
                    type="button"
                    className="save-button"
                    onClick={() => saveEdit(todo.id)}
                    disabled={!editText.trim()}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    className="icon-button"
                    onClick={() => startEditing(todo)}
                    aria-label={`Edit ${todo.text}`}
                  >
                    Edit
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="icon-button delete-button"
                  aria-label={`Delete ${todo.text}`}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Todos;
