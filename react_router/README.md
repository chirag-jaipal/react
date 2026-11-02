# React Router Practice Project

A small React single-page application for practicing client-side routing with React Router, nested layouts, dynamic URL parameters, and route loaders.

## Features

- Shared header and footer rendered through a root layout.
- Client-side navigation with active-link styling.
- Static pages for Home, About, and Contact.
- Dynamic user page at `/user/:id`.
- GitHub profile page that loads `chirag-jaipal` data from the GitHub REST API.
- Responsive styling with Tailwind CSS.

## Tech Stack

- React 19
- React Router DOM 7
- Vite
- Tailwind CSS 4
- Bun

## Getting Started

### Prerequisites

- Bun installed on your machine.
- Network access for the GitHub page, which requests data from `api.github.com`.

### Installation

```bash
bun install
```

### Run the development server

```bash
bun run dev
```

Vite will print the local URL in the terminal.

### Build for production

```bash
bun run build
```

### Preview the production build

```bash
bun run preview
```

### Lint the project

```bash
bun run lint
```

## Routes

| Path | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Landing page |
| `/about` | About | Overview of the project |
| `/contact` | Contact | Contact information and form UI |
| `/user/:id` | User | Displays the user ID from the URL |
| `/github` | GitHub | Displays follower count and avatar data loaded from GitHub |

All routes are rendered inside [`Layout.jsx`](./src/Layout.jsx), so the header and footer remain consistent while the route content is rendered through React Router's `Outlet`.

## Project Structure

```text
src/
├── Layout.jsx                 # Shared route layout
├── main.jsx                   # Router configuration and app entry point
├── index.css                  # Tailwind import and global styles
└── components/
    ├── header/Header.jsx      # Navigation
    ├── footer/Footer.jsx      # Footer links and branding
    ├── home/Home.jsx
    ├── about/About.jsx
    ├── contact/Contact.jsx
    ├── user/User.jsx          # Dynamic :id route
    └── github/Github.jsx      # Loader-backed GitHub page
```

## GitHub Data Loading

The `/github` route uses `githubInfoLoader` before rendering the page. The loader requests:

```text
https://api.github.com/users/chirag-jaipal
```

The page reads the response with React Router's `useLoaderData` hook and displays the account's follower count and avatar. GitHub API availability and rate limits can affect this page independently of the rest of the application.
