# Password Generator

A small React and Vite practice project for generating customizable passwords in the browser.

## Features

- Generates a new password automatically when the length or character options change.
- Adjustable password length from 6 to 100 characters.
- Includes uppercase and lowercase letters by default.
- Optional numbers and special characters.
- One-click copy to the clipboard.
- Responsive interface styled with Tailwind CSS.

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 4
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

The password generator is implemented in [`src/App.jsx`](./src/App.jsx). React state stores the selected length, whether numbers and special characters are enabled, and the current password. Whenever one of these settings changes, the app generates a new password from the enabled character sets.

The **Copy** button selects the generated password and writes it to the browser clipboard using the Clipboard API. Clipboard access may require a secure context, such as `localhost` during development or HTTPS in production.

Tailwind CSS provides the layout and component styling. Its Vite integration is configured in [`vite.config.js`](./vite.config.js), and the Tailwind entry point is imported from [`src/index.css`](./src/index.css).

## Project structure

```text
.
├── public/             # Static assets
├── src/
│   ├── App.jsx         # Password generator UI and logic
│   ├── index.css       # Global styles and Tailwind entry point
│   └── main.jsx        # React application entry point
├── index.html          # HTML shell
├── eslint.config.js    # ESLint configuration
├── vite.config.js      # Vite and Tailwind configuration
└── package.json        # Scripts and dependencies
```

## Production build

Build the application with:

```bash
bun run build
```

The generated files are placed in `dist/` and can be deployed to any static hosting service that supports single-page applications.