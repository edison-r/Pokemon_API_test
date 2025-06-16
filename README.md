# 🔍 Pokémon Search App – TypeScript Practice

This is a small front-end project built with **TypeScript**, using the [PokeAPI](https://pokeapi.co) to search for Pokémon by name. It was created as part of my learning journey into TypeScript and module-based architecture.

It started as a simple app in vanilla JavaScript, but I decided to rewrite it entirely in TypeScript to get more comfortable with typings, interfaces, and code modularization.

---

## Technologies Used

- TypeScript (compiled to ES6 modules)
- HTML5 + TailwindCSS (for layout and styling)
- Fetch API (for external data)
- PokeAPI (to retrieve Pokémon details)

---

## Features

### Pokémon Search

- Users can type a Pokémon name and fetch basic data from the API.
- Displays the Pokémon’s image and name.
- Handles both valid and invalid inputs with clear messages.

### Error Handling

- Shows contextual feedback if no name is entered or the Pokémon is not found.
- All API calls are handled with async/await and try...catch blocks.

### Clean Modular Code

The app is split into three TypeScript modules:

- `main.ts` – Entry point, DOM bindings, event listeners.
- `api.ts` – Fetch logic with typings.
- `ui.ts` – DOM rendering and message display helpers.

Each module is responsible for a specific task, making the code easier to scale and maintain.

---

## Project Structure

```
📁 scripts
   ├── main.ts      ← handles input & triggers logic
   ├── api.ts       ← fetches Pokémon from API
   ├── ui.ts        ← DOM feedback (success + error)
   └── types.ts     ← interfaces and custom types

📁 src
   ├── input.css    ← TailwindCSS source
   └── output.css   ← compiled CSS (optional)

📁 assets
   └── im/          ← images

📁 dist
   ├── main.js      ← compiled output
   ├── api.js
   └── ui.js

index.html
tsconfig.json
README.md
```

> All TypeScript files are compiled with `tsc` and placed into the `dist/` folder, keeping a clean separation between source and build output.

---

## What I Learned

- My **first hands-on experience with TypeScript** in a real project.
- How to define and use **interfaces** for typed API responses.
- The importance of **modular code structure** when working with larger apps.
- How to debug typical TS/browser issues (like import paths and compilation).
- How to set up a custom `tsconfig.json` for small projects.

---

## Possible Improvements

- Add more Pokémon details (types, stats, abilities...).
- Include a loading spinner while the API call is in progress.
- Display error codes or status messages from the API.
- Add a recent search history or favorite list.
- Add offline fallback or cache for previously searched Pokémon.

---

🧪 Built as a solo learning project.\
💬 Feedback is welcome — I’m always looking to improve!