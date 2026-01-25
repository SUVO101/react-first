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
- [JSX](#jsx)
- [Conditional Rendering](#conditional-rendering)



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

## Jsx


### 🔹 What is JSX?
- JSX stands for JavaScript XML.
- JSX allows us to write HTML-like code inside JavaScript.

- It makes React code:
- - ✅ Easy to read
- - ✅ Easy to write
- - ✅ Easy to understand

### 🔹 Why JSX is Used?

- Without JSX, writing UI in React is hard and confusing.

❌ Without JSX (Pure JavaScript)
```
React.createElement(
  "h1",
  null,
  "Hello React"
);
```
✅ With JSX (Easy & Clean)

```
<h1>Hello React</h1>
```
👉 JSX is NOT HTML, but it looks like HTML.

### 🔹 Important Point (Interview 🔥)

JSX is converted into JavaScript by Babel before running in the browser.

- Browser ❌ does not understand JSX
- Browser ✅ understands JavaScript
<img src="./public/jsx-to-js.png">

### 🔹 First JSX Example
```
function App() {
  return <h1>Hello World</h1>;
}

export default App;

```
📌 This is a React component written using JSX.

### 🔹 JSX Rules

- 1️⃣ JSX Must Return One Parent Element

❌ Wrong

```
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```


✅ Correct (Using div)

```
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```


✅ Better (Using Fragment)

```
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

- 2️⃣ Use className Instead of class

❌ HTML

```
<div class="box"></div>
```


✅ JSX

```
<div className="box"></div> // 👈
```


📌 Because class is a JavaScript keyword.

- 3️⃣ JavaScript Inside JSX {}

You can write JavaScript expressions using {}.

```
function App() {
  const name = "React";

  return <h1>Hello {name}</h1>; // 👈
}
```

🟢 Output:

Hello React

- 4️⃣ Mathematical Expressions in JSX

```
function App() {
  return <h1>Result: {10 + 5}</h1>; // 👈
}
```
🟢 Output:

Result: 15

- 5️⃣ Function Call Inside JSX
```
function App() {
  const greet = () => "Good Morning";

  return <h1>{greet()}</h1>; // 👈
}
```

### 🔹 JSX Attributes
```
<img src="logo.png" alt="logo" /> // 👈
```
📌 Attributes are written in `camelCase`.

### 🔹 Inline Styling in JSX

❌ Wrong

```
<h1 style="color:red">Hello</h1>
```
✅ Correct
```
<h1 style={{ color: "red", fontSize: "20px" }}>
  Hello
</h1>
```
📌 Styles are written as JavaScript objects.

### 🔹 Conditional Rendering in JSX
Using Ternary Operator
```
function App() {
  const isLoggedIn = true;

  return (
    <h1>{isLoggedIn ? "Welcome User" : "Please Login"}</h1>
  );
}
```

### 🔹 Rendering List Using JSX (map)
```
function App() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```
📌 key helps React identify elements efficiently.

### 🔹 JSX Comments

```
{/* This is a JSX comment */}
<h1>Hello JSX</h1>
```

### 🔹 Boolean Attributes in JSX
```
<button disabled>Click Me</button>
```
OR
```
<button disabled={true}>Click Me</button>
```

## Conditional Rendering

here we create a file named `ConditionalRendering.jsx` inside `components` Folder.

now we simply export it and call it inside `App.jsx` file. like below.
```
<ConditionalRendering/>
```

- ### 1️⃣🟡🟢🔴

and inside `ConditionalRendering.jsx` write the below code 

```
const ConditionalRendering = () => {
  const isLoggedIn = false;
    return (
      <div>
          { isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1> }
      </div>
    )
};
export default ConditionalRendering;
```
⭐ here we create a variable and based on the value we can show different value. here we simply check the value of `isLoggedIn`. if the `isLoggedIn` value is `true` then show `Welcome User` else `Please Login`. here we use `ternary operator`.

**🔴 Syntax: `condition ? true : false;`**

- ### 2️🟡🟢🔴

using `and` operator. modify the code inside `ConditionalRendering.jsx` and write the below code 

```
const ConditionalRendering = () => {
  const isLoggedIn = true;

  return (
    <div>
        { isLoggedIn && <h1>Welcome User</h1> }
    </div>
  );
};
export default ConditionalRendering;
```
⭐ Here we check the isLoggedIn value.
If isLoggedIn is `true`, then the `<h1>Welcome User</h1>` will be rendered on the screen.
If isLoggedIn is `false`, `nothing` will be rendered.
- `true && JSX` → JSX is shown ✅
- `false && JSX` → nothing is shown ❌


- ### 3️⃣🟡🟢🔴

modify the `ConditionalRendering.jsx` code 
```
const ConditionalRendering = () => {
  const isLoggedIn = false;
  let message;

  if (isLoggedIn) {
    message = <h1>Welcome User</h1>;
  } else {
    message = <h1>Please Login</h1>;
  }

  return <div>{message}</div>;
};
export default ConditionalRendering;
```
⭐ here we create a variable and based on the value we can show different value. here we simply check the value of `isLoggedIn`. if the `isLoggedIn` value is `true` then  `Welcome User` else `Please Login` and also store the value inside `message` variable. then print it.

- ### 4️⃣🟡🟢🔴

Conditional Rendering with css file

- - `Step:1:` create a css file named `ConditionalRendering.module.css` inside `css` Folder.
- - `Step:2:` write the below code
```
.login{
    background-color: red;
    padding: 10px;
}

.welcome{
    background-color: green;
    padding: 10px;
}
```
- - `Step:3:` now import the css file inside `ConditionalRendering.jsx` file.
```
import style from "../css/ConditionalRendering.module.css";
```
- - `Step:4:` now use the css file inside `ConditionalRendering.jsx` file.
```
<h1 className={isLoggedIn ? style.welcome : style.login}>{isLoggedIn?'Welcome User':'Please Login'}</h1>
```
- - `Step:5:` Full Code
```
import style from "../css/ConditionalRendering.module.css";

const ConditionalRendering = () => {
  const isLoggedIn = true;

  return (
    <div>
        { <h1 className={isLoggedIn ? style.welcome : style.login}>{isLoggedIn?'Welcome User':'Please Login'}</h1>}
    </div>
  );
};

export default ConditionalRendering;
```

