# Redux Toolkit Todo

A clean, responsive todo application built with React and Redux Toolkit. The app demonstrates how to manage shared todo state with a Redux store while keeping local form and editing state inside the components that own it.

## Features

- Add new tasks from the task input.
- Ignore empty or whitespace-only submissions.
- Mark tasks complete or active.
- Edit task text inline.
  - Press **Enter** to save an edit.
  - Press **Escape** to cancel an edit.
- Delete tasks.
- Display the total number of tasks and the completed-task summary.
- Show a friendly empty state when there are no tasks.
- Responsive layout for desktop and mobile screens.
- Accessible labels, keyboard focus styles, and pressed-state information for controls.

## Tech stack

- React 19
- Redux Toolkit
- React Redux
- Vite
- Tailwind CSS 4 through the Vite plugin
- ESLint

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm, or an equivalent package manager

### Install dependencies

From this directory:

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |

## Project structure

```text
src/
├── App.jsx                    # Main page layout
├── index.css                  # Global styles and responsive UI styling
├── main.jsx                   # React entry point and Redux Provider
├── app/
│   └── store.js               # Redux store configuration
├── components/
│   ├── AddTodo.jsx            # New-task form
│   └── Todos.jsx              # Task list and task interactions
└── features/
    └── todo/
        └── todoSlice.js       # Todo state and reducers
```

## State management

The Redux store is configured in `src/app/store.js` with the todo slice reducer:

```js
{
  todos: [
    {
      id: "generated-id",
      text: "Example task",
      completed: false
    }
  ]
}
```

`todoSlice.js` defines the following actions:

| Action | Purpose |
| --- | --- |
| `addTodo(text)` | Creates a task with a generated ID and `completed: false`. |
| `removeTodo(id)` | Removes the task matching the supplied ID. |
| `editTodo({ id, text })` | Replaces the text of the matching task. |
| `toggleComplete(id)` | Toggles the matching task’s completion status. |

Redux Toolkit uses Immer internally, allowing the reducers to update state using concise mutation-style syntax while still producing immutable state updates.

## Component behavior

### `AddTodo`

`AddTodo` owns the current input value locally. On submit, it trims the value, prevents blank tasks from being dispatched, sends `addTodo(text)` to Redux, and clears the input after a successful add.

### `Todos`

`Todos` reads the task collection with `useSelector` and dispatches task actions with `useDispatch`. It owns only the temporary UI state needed for inline editing:

- `editingId` identifies the task currently being edited.
- `editText` stores the draft text before it is saved.

Completed tasks receive a visual strikethrough treatment, and the list header updates with the current completed-task count.

## Styling

The interface uses a dark, card-based visual system with:

- A responsive centered layout.
- High-contrast task controls and focus indicators.
- Distinct hover, completed, disabled, and empty states.
- A mobile breakpoint that stacks the add form and task actions.
- CSS custom styling in `src/index.css`, alongside the Tailwind CSS import configured by Vite.

## Data persistence

Todos are currently stored only in Redux memory. Refreshing the page resets the list to an empty state. A future version could add persistence with `localStorage` or a backend API.

## Validation

Run both checks before sharing a production build:

```bash
npm run lint
npm run build
```
