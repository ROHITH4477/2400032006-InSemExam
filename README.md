# Todo App

A simple To-Do list application built with Vite + React.

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Clean, minimal UI
- Responsive design

## Setup & Commands

### Prerequisites
- Node.js (version 14 or higher)
- npm

### Installation & Running

1. **Create project:**
   ```bash
   npm create vite@latest todo-app --template react
   ```

2. **Enter project:**
   ```bash
   cd todo-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
todo-app/
├── public/
├── src/
│   ├── components/
│   │   └── TodoItem.jsx
│   ├── pages/
│   │   └── TodoList.jsx
│   ├── styles/
│   │   └── App.css
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Git Instructions

### Initialize and first push:

```bash
git init
git add .
git commit -m "Initial commit - ToDo List app (Vite + React)"
# Create repo on GitHub (e.g. todo-app) and then:
git remote add origin https://github.com/<your-username>/todo-app.git
git branch -M main
git push -u origin main
```

### Subsequent updates:

```bash
git add .
git commit -m "Describe your changes"
git push
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **JavaScript (JSX)** - Programming language
- **CSS** - Styling

## How to Use

1. Enter a task in the input field
2. Click "Add" or press Enter to add the task
3. Check the checkbox to mark a task as complete
4. Click "Delete" to remove a task

The app uses React's `useState` hook for state management and renders tasks using the `map()` function as required.





