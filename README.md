# Workout - Planer 

A simple browser-based Workout - Planer built with vanilla JavaScript, HTML and CSS — no frameworks, no dependencies.

## Features

- Log exercises with sets and reps
- Entries persist in the browser via **localStorage** — data survives page reloads
- Reset button to clear all entries
- Clean dark UI with green accent colors

## Technologies

- HTML5
- CSS3 (Flexbox, custom dark theme)
- Vanilla JavaScript (DOM, Events, localStorage)

## Usage

Just open `index.html` in your browser — no installation needed.

1. Enter an exercise name, number of sets and reps
2. Click **ADD** to log the entry
3. Entries are saved automatically and restored on reload
4. Click **RESET** to clear all entries

## Project Structure

```
training-tracker/
├── index.html       # App structure and form
├── style.css        # Dark theme styling
└── app.js           # Logic: DOM manipulation, localStorage, validation
```

## What I learned

This project was built as a **JavaScript learning exercise** covering:
- DOM manipulation with `document.getElementById()`, `createElement()`, `appendChild()`
- Event handling with `addEventListener()` and `preventDefault()`
- Arrays and Objects
- Form validation
- Template literals
- `localStorage` with `JSON.stringify()` and `JSON.parse()`
- CSS Flexbox and dark theme design
