# Currency Converter

A small React and Vite practice project for converting an amount between currencies using live exchange-rate data.

## Features

- Converts an amount from one currency to another.
- Loads currency options and exchange rates based on the selected source currency.
- Swap button for quickly reversing the source and target currencies.
- Responsive interface with a glass-style layout and full-screen background image.
- Reusable currency input component for entering amounts and selecting currencies.
- Tailwind CSS styling with a fast Vite development workflow.

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

The main interface is implemented in [`src/App.jsx`](./src/App.jsx). It stores the amount, source currency, target currency, and converted result in React state. The default source and target currencies are USD and INR.

When the source currency changes, [`useCurrencyInfo`](./src/hooks/useCurrencyInfo.js) requests the corresponding exchange-rate data from the `@fawazahmed0/currency-api` CDN endpoint:

```text
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```

Submitting the form multiplies the entered amount by the selected target currency's rate. The **Swap** button exchanges the selected currencies and also swaps the entered and converted amounts.

The reusable [`InputBox`](./src/components/InputBox.jsx) component renders the amount field and currency selector. Tailwind CSS provides the layout and visual styling through the Vite plugin configured in [`vite.config.js`](./vite.config.js).

## API considerations

This project depends on the public currency API being available in the browser. It does not include a server-side proxy, authentication, rate caching, or a dedicated loading/error message. If the request fails, the hook logs the error to the browser console and the currency list remains empty until data is successfully loaded.

## Project structure

```text
.
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── InputBox.jsx    # Amount input and currency selector
│   │   └── index.js        # Component exports
│   ├── hooks/
│   │   └── useCurrencyInfo.js # Exchange-rate data hook
│   ├── App.jsx             # Converter UI and conversion logic
│   ├── index.css           # Global styles and Tailwind entry point
│   └── main.jsx            # React application entry point
├── index.html              # HTML shell
├── eslint.config.js        # ESLint configuration
├── vite.config.js          # Vite and Tailwind configuration
└── package.json            # Scripts and dependencies
```

## Production build

Build the application with:

```bash
bun run build
```

The generated files are placed in `dist/` and can be deployed to any static hosting service that supports single-page applications.
