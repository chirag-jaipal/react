# Theme Switcher

A small React and Tailwind CSS project that demonstrates light and dark theme switching. The page displays a product card and a toggle that updates the document theme instantly.

## Features

- Switch between light and dark themes with a checkbox toggle.
- Share theme state through a React context.
- Apply Tailwind dark-mode utilities using the `dark` class on the root `<html>` element.
- Responsive product card layout with a polished background, spacing, shadows, and transitions.
- Vite-powered development server and production build.

## Tech Stack

- React
- Vite
- Tailwind CSS
- `@tailwindcss/vite`

## Getting Started

### Prerequisites

- Node.js 18+ and npm, or
- Bun

### Install dependencies

Using npm:

```bash
npm install
```

Using Bun:

```bash
bun install
```

### Start the development server

```bash
npm run dev
```

Or with Bun:

```bash
bun run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build |
| `npm run lint` | Check the project with ESLint |
| `npm run preview` | Preview the production build locally |

The same scripts can be run with `bun run`.

## How Theme Switching Works

The theme state is managed in [`src/App.jsx`](./src/App.jsx). The app provides the current mode and theme-changing functions through [`ThemeProvider`](./src/contexts/theme.js).

When the theme changes, an effect removes the existing `light` and `dark` classes from the root HTML element and adds the selected mode:

```html
<html class="dark">
```

Tailwind is configured to treat `.dark` and its descendants as dark-mode scopes through the custom variant in [`src/index.css`](./src/index.css). Components can therefore use utilities such as `dark:bg-gray-800` and `dark:text-white`.

The reusable [`ThemeButton`](./src/components/ThemeButton.jsx) reads the context and keeps the checkbox state synchronized with the active theme. [`Card`](./src/components/Card.jsx) demonstrates light and dark styling in a product-card interface.

## Project Structure

```text
theme_switcher/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Card.jsx        # Product card example
│   │   └── ThemeButton.jsx # Light/dark mode toggle
│   ├── contexts/
│   │   └── theme.js        # Theme context and hook
│   ├── App.jsx             # Application layout and theme state
│   ├── index.css           # Tailwind import and global styles
│   └── main.jsx            # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Production Build

Create a production build with:

```bash
npm run build
```

The generated files are placed in the `dist/` directory. To serve that build locally:

```bash
npm run preview
```

## Customization

- Update the sample product content and image in `src/components/Card.jsx`.
- Add more theme-aware styles with Tailwind's `dark:` variant.
- Extend the theme context if additional theme modes or persisted preferences are needed.
- Adjust global colors, gradients, and transitions in `src/index.css`.