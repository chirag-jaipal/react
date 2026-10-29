# Background Changer

A small React and Vite practice project that lets you change the page background by selecting a color from a floating palette.

## Features

- Full-screen background that updates immediately when a color is selected.
- Ten predefined color choices.
- Responsive, wrapped color palette that remains accessible across viewport sizes.
- Fast development workflow powered by Vite and Tailwind CSS.

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

Clone the repository, move into the project directory, and install the dependencies:

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

The color palette is defined in [`src/App.jsx`](./src/App.jsx). The `App` component stores the active color in React state and applies it to the full-screen container through the `backgroundColor` style. Clicking a palette button calls `setColor` with that button's hex value.

Tailwind CSS provides the layout and component styling. Its Vite plugin is configured in [`vite.config.js`](./vite.config.js), and the Tailwind entry point is imported from [`src/index.css`](./src/index.css).

## Customization

To add, remove, or change color choices, edit the `colors` array near the top of [`src/App.jsx`](./src/App.jsx):

```jsx
const colors = ["#FF5733", "#33FF57", "#3357FF"];
```

The initial background color can be changed by updating the initial value passed to `useState`:

```jsx
const [color, setColor] = useState("#111111");
```

## Project structure

```text
.
├── public/             # Static assets
├── src/
│   ├── App.jsx         # Color palette and background changer UI
│   ├── index.css       # Tailwind CSS entry point
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