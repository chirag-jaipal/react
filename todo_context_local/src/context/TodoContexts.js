import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  createTodo: (todo) => {},
  editTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoContextProvider = TodoContext;

export function useTodo() {
  return useContext(TodoContext);
}
