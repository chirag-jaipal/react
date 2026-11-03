# Mini Context

A small React and Vite practice project that demonstrates how to share user state between components with the React Context API.

## Features

- Login form for entering a username and password.
- Shared user state provided to the application through `UserContext`.
- Profile panel that updates immediately after the user is saved.
- Empty and connected profile states.
- Responsive layout with custom CSS and no external UI framework.

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- JavaScript (ES modules)
- ESLint

## Getting started

### Prerequisites

- [Bun](https://bun.sh/) is recommended because this project includes a `bun.lock` lockfile.
- Node.js and another npm-compatible package manager can also be used.

### Installation

From this directory, install the dependencies:

```bash
bun install
```

### Start the development server

```bash
bun run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Vite development server. |
| `bun run build` | Create an optimized production build in `dist/`. |
| `bun run preview` | Serve the production build locally. Run `bun run build` first. |
| `bun run lint` | Run ESLint across the project. |

If you use npm instead of Bun, replace `bun run` with `npm run`.

## How it works

[`UserContext`](./src/context/UserContext.js) creates the context used to share the current user and its setter. [`UserContextProvider`](./src/context/UserContextProvider.jsx) owns the `user` state, initializes it to `null`, and makes `{ user, setUser }` available to its children.

The provider wraps the main content in [`App.jsx`](./src/App.jsx), allowing both child components to access the same state:

1. [`Login.jsx`](./src/components/Login.jsx) stores the form fields locally while the user types.
2. Submitting the form calls `setUser` with the entered username and password.
3. [`Profile.jsx`](./src/components/Profile.jsx) reads the shared `user` value with `useContext`.
4. The profile displays an empty state until a user is saved, then greets the saved username.

This is a client-side learning example only. The form does not authenticate against a server, persist data, or validate credentials. The entered password is held in React state and is not displayed by the profile.

## Project structure

```text
.
├── public/                         # Static assets
├── src/
│   ├── components/
│   │   ├── Login.jsx               # Login form that updates shared user state
│   │   └── Profile.jsx             # Profile view that reads shared user state
│   ├── context/
│   │   ├── UserContext.js          # React context definition
│   │   └── UserContextProvider.jsx  # Context provider and user state
│   ├── App.jsx                     # Provider setup and page layout
│   ├── index.css                   # Responsive application styles
│   └── main.jsx                    # React application entry point
├── index.html                      # HTML shell
├── eslint.config.js                # ESLint configuration
├── vite.config.js                  # Vite configuration
└── package.json                    # Scripts and dependencies
```

## Production build

Build the application with:

```bash
bun run build
```

The generated files are placed in `dist/` and can be deployed to any static hosting service that supports single-page applications.