# Todo App with React Context API

A small, responsive todo application built with React, Vite, Tailwind CSS, and the Context API. Todos are managed in the top-level `App` component, shared with child components through context, and persisted in the browser's local storage.

## Features

- Add new todo items
- Mark todos as complete or incomplete
- Edit active todos
- Delete todos
- Restore todos after refreshing the page
- Display a task count and an empty-list state
- Responsive dark interface with Tailwind CSS

## Tech stack

- React 19
- Vite
- Tailwind CSS 4
- React Context API
- Browser `localStorage`

## Getting started

### Prerequisites

- Node.js 18+ and npm, or
- Bun

### Install dependencies

Using Bun:

```bash
bun install
```

Using npm:

```bash
npm install
```

### Start the development server

```bash
bun run dev
```

Or with npm:

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

When using Bun, replace `npm run` with `bun run`.

## How it works

`App.jsx` owns the todo state and exposes these operations through `TodoContextProvider`:

- `createTodo(todo)` adds a new item with a generated ID and `completed: false`
- `editTodo(id, todo)` updates the text of a matching item
- `deleteTodo(id)` removes an item
- `toggleComplete(id)` switches an item's completed state

The app reads the `todos` key from `localStorage` when it mounts. A second effect writes the current todo array back to the same key whenever the state changes.

Each todo has this shape:

```js
{
  id: 1710000000000,
  todo: "Example task",
  completed: false
}
```

## Project structure

```text
src/
├── App.jsx
├── index.css
├── main.jsx
├── components/
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   └── index.js
└── context/
    ├── TodoContexts.js
    └── index.js
```

### Components

- `App.jsx` manages state, persistence, and page layout.
- `TodoForm.jsx` handles controlled input and creates todos through context.
- `TodoItem.jsx` renders a todo and handles editing, completion, and deletion.
- `TodoContexts.js` defines the context and the `useTodo` hook.

## Data persistence

Todos are stored only in the current browser and are not synchronized with a server or other devices. To clear the saved list, run this in the browser console:

```js
localStorage.removeItem("todos");
```

## Notes

- Completed todos cannot be edited until they are marked active again.
- The project does not include a backend, authentication, or multi-user storage.