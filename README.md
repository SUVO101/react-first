# React
hello, friends this is subhankar nath.today we are learn the react.so , react is a javascript library for building user interfaces.it is developed by facebook.

## Table of Contents

- [Installation](#installation)
- [Folder structure](#folder-structure)
- [Project Flow](#project-flow)
- [Run Project](#run-project)
- [Useful Tools and Extensions](#useful-tools-and-extensions)
- [Components](#components)
- [Add Css Styles](#add-css-style-inside-components)
- [Inspect Page using React Developer Tools](#inspect-page)



## Installation
create the react project with the given command `npm create vite@latest`.
here vite is a powerful build tool, it supports hot reload.
```
E:\learning\front-end\react>npm create vite@latest

> npx
> create-vite

|
o  Project name:
|  react-first
|
o  Select a framework:
|  React
|
o  Select a variant:
|  JavaScript
|
o  Use rolldown-vite (Experimental)?:
|  No
|
o  Install with npm and start now?
|  Yes
|
o  Scaffolding project in E:\learning\front-end\react\react-first...
|
o  Installing dependencies with npm...
```

## Folder structure
<img src="./public/project-structure.png">

This project is created using React + Vite, which is fast and modern.

📦 **node_modules/**

- Contains all installed packages and libraries
- Created automatically when you run:
- `npm install`
- ❌ You should never edit this folder
- ❌ Not uploaded to GitHub

🌍 **public/**

- Stores public files that don’t go through React
- Files here are directly accessible in the browser
```
Example:
   favicon.ico
   logos
```
- static images
- Use this for files that never change

🧠 **src/** (Most Important Folder)

- This is where actual React code lives 🧩

🎨 **src/assets/**
- Stores images, icons, SVGs
```
Example:
react.svg
```
- Used inside components like:
- import logo from './assets/react.svg'

🎨 **src/App.css**

- CSS for the App.jsx component
- You can write component-specific styles here

🧩 **src/App.jsx**

- Main React component
- All other components are usually called from here

```
Example:

function App() {
  return <h1>Hello React</h1>;
}
export default App;
```
- ➡️ Think of App.jsx as the root UI layout

🎨 **src/index.css**

- Global CSS
- Styles applied to the whole website
```
Good for:
body,
fonts,
background,
Tailwind imports
```

🚀 **src/main.jsx**

- Entry point of React
- Connects React with index.html

Example:

```
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
```

➡️ This file:
- Starts React
- Loads App.jsx

🧾 **index.html**

- Single HTML file (SPA concept)

- React injects everything inside this file

Contains:
```
<div id="root"></div>
```


➡️ React app runs inside this div

⚙️ **package.json**
Project configuration file
Contains:
- project name
- scripts
- dependencies

Example:

```
"scripts": {
  "dev": "vite",
  "build": "vite build"
}
```

🔒 **package-lock.json**

- Locks exact versions of installed packages
- Ensures same dependencies on every machine
- Auto-generated (don’t edit)

🧹 **.gitignore**

Tells Git which files to ignore
Example:
- node_modules
- .env

📏 **eslint.config.js**

- ESLint configuration
- Helps maintain clean & error-free code

📝 **README.md**
Project documentation file

Explains:
- project purpose
- setup steps
- usage
➡️ This explanation can go here 😉

⚡ **vite.config.js**
Vite configuration file
Used for:
- plugins
- aliases
- build settings


## Project Flow
<img src="./public/react-flow.png">

## Run Project
```
npm run dev
```
while we can change the `dev` keyword inside scripts object from `package.json` file.

like, if we want to run the project with `npm start` command, then we can change the `dev` keyword to `start`.

```
"scripts": {
  "start": "vite", // 👈
  "build": "vite build"
}
```

## Useful Tools and Extensions

### Tools
download the react developement tool from the react official website [👉click here](https://react.dev/learn/react-developer-tools).

### Extensions
- ES7+ React/Redux/React-Native
- Prettier - Code formatter
- Path Intellisense
- ESLint

## Components

<img src="./public/component-flow.png">

here we craete three componenet files inside components folder.
- Header.jsx
- Body.jsx
- Footer.jsx

⭐⭐⭐ here we use `jsx` syntax. which is a `extension of javascript`.means we can `write html inside javascript`. but it is not mandatory to use jsx. we can also use plain javascript.

### Step:1
create folder and create three files.

### Step:2
create and export the components form the file , like below.
here i put the below code inside `Body.jsx` file.
- ⭐ file name must be starting with capital letter like `Header/Body/Footer`
- ⭐ extentions must be `.jsx`
- ⭐ export the functions.
- ⭐⭐ here i type `rafce` which gives me a react export function. 
`rafce: react arrow function components export`

```
const Body = () => {
  return (
    <div>
        <h2>🔥 Content Area</h2>
        <p>........</p>
    </div>
  )
}

export default Body
```

like that you have to create rest two componets and export them.

- 1️⃣ Header.jsx
```
const Header = () => {
  return (
    <div>
        <h1>Header</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header
```

- 2️⃣ Body.jsx
```
const Body = () => {
  return (
    <div>
        <h2>🔥 Content Area</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis temporibus eius porro! Temporibus alias fuga, necessitatibus maxime omnis totam iusto adipisci dolorum, quae ipsam nostrum suscipit mollitia. Rem vitae delectus asperiores nam, rerum magnam quis officia iure, nemo adipisci optio laudantium, dolorum quidem quasi animi amet dicta non laboriosam.</p>
    </div>
  )
}

export default Body

```

- 3️⃣ Footer.jsx
```
const Footer = () => {
  return (
    <div>
        <p>© 2026 React. All rights reserved. | Made with ❤️ by <a href="https://github.com/SUVO101">Subhankar Nath</a></p>
    </div>
  )
}

export default Footer
```

### Step:3
call all the components inside `App.jsx` file.
⭐ don't forget to import the component file at the top.

```
import Body from "./components/Body" // 👈👈
import Footer from "./components/Footer" // 👈👈
import Header from "./components/Header" // 👈👈

const App = () => {
  return (
   <div>
      <Header/> // 👈👈
      <Body/> // 👈👈
      <Footer/> // 👈👈
   </div>
  )
}

export default App
```
🔥we can call the components by using self closing tag. 
- Synatx: `<ComponetName />`

## Add Css Style inside Components
we just use `style` attribute inside html element. like this 👉 `style={{display: "flex", gap: "15px", listStyle: "none"}}`

Example-
 ```
<div style={{backgroundColor: "#e0fabeff", padding: "10px",border: "1px solid #ccc",textAlign: "center"}}>
        <p>--------------------</p>
</div>
 ```

 to write css style inside `jsx` we have to use `{{ }}` and also write all the css property using `👉CamelCase` like `backgroundColor` instead of `background-color`

 ```
 backgroundColor✅
 background-color❌
 ```

 ```
style={{backgroundColor: "#e0fabeff"}}✅
style={background-color: "#e0fabeff"}❌
```

## Inspect Page

here we already install `React Developer Tools` from the `chrome web store`. now we can inspect the page using this tool. 
we see the below image.
<img src="./public/inspect-page.png">
 
here we see the `App` component and its child components `Header`, `Body`, `Footer`.
so,
- **Parent Component**: `App`
- **Child Components**: `Header`, `Body`, `Footer`