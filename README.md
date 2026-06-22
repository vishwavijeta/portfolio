# Portfolio

A data-driven personal portfolio built with **React + Vite**.

The page shows your **name**, **summary**, **skills**, **company experience**,
**education**, and a **list of projects**. All content is driven by JSON files,
so you can update your portfolio without touching the React code.

## Edit your content

All data lives in [`src/data/`](src/data/):

| File | What it holds |
| --- | --- |
| `profile.json` | Name, title, and summary |
| `skills.json` | Array of skills (`name`, `level`) |
| `experience.json` | Array of company experience |
| `education.json` | Array of education entries |
| `projects.json` | Array of projects (`name`, `description`, `tech`, `link`) |

## Run locally

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```
