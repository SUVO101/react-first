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
- [Array and Object](#array-and-object)
- [Props](#props)



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

Example:
```javascript
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

```javascript
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
```html
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

```javascript
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

```javascript
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

```javascript
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
```javascript
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
```javascript
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
```javascript
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

```javascript
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
 ```html
<div style={{backgroundColor: "#e0fabeff", padding: "10px",border: "1px solid #ccc",textAlign: "center"}}>
        <p>--------------------</p>
</div>
 ```

 to write css style inside `jsx` we have to use `{{ }}` and also write all the css property using `👉CamelCase` like `backgroundColor` instead of `background-color`

 ```css
 backgroundColor✅
 background-color❌
 ```

 ```css
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
```javascript
React.createElement(
  "h1",
  null,
  "Hello React"
);
```
✅ With JSX (Easy & Clean)

```html
<h1>Hello React</h1>
```
👉 JSX is NOT HTML, but it looks like HTML.

### 🔹 Important Point (Interview 🔥)

JSX is converted into JavaScript by Babel before running in the browser.

- Browser ❌ does not understand JSX
- Browser ✅ understands JavaScript
<img src="./public/jsx-to-js.png">

### 🔹 First JSX Example
```javascript
function App() {
  return <h1>Hello World</h1>;
}

export default App;
```
📌 This is a React component written using JSX.

### 🔹 JSX Rules

- 1️⃣ JSX Must Return One Parent Element

❌ Wrong

```javascript
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```


✅ Correct (Using div)

```javascript
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```


✅ Better (Using Fragment)

```javascript
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

- 2️⃣ Use className Instead of class

❌ HTML

```html
<div class="box"></div>
```


✅ JSX

```html
<div className="box"></div> // 👈
```


📌 Because class is a JavaScript keyword.

- 3️⃣ JavaScript Inside JSX {}

You can write JavaScript expressions using {}.

```javascript
function App() {
  const name = "React";

  return <h1>Hello {name}</h1>; // 👈
}
```

🟢 Output:

Hello React

- 4️⃣ Mathematical Expressions in JSX

```javascript
function App() {
  return <h1>Result: {10 + 5}</h1>; // 👈
}
```
🟢 Output:

Result: 15

- 5️⃣ Function Call Inside JSX
```javascript
function App() {
  const greet = () => "Good Morning";

  return <h1>{greet()}</h1>; // 👈
}
```

### 🔹 JSX Attributes
```css
<img src="logo.png" alt="logo" /> // 👈
```
📌 Attributes are written in `camelCase`.

### 🔹 Inline Styling in JSX

❌ Wrong

```css
<h1 style="color:red">Hello</h1>
```
✅ Correct
```javascript
<h1 style={{ color: "red", fontSize: "20px" }}>
  Hello
</h1>
```
📌 Styles are written as JavaScript objects.

### 🔹 Conditional Rendering in JSX
Using Ternary Operator
```javascript
function App() {
  const isLoggedIn = true;

  return (
    <h1>{isLoggedIn ? "Welcome User" : "Please Login"}</h1>
  );
}
```

### 🔹 Rendering List Using JSX (map)
```javascript
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
```javascript
<button disabled>Click Me</button>
```
OR
```javascript
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

```javascript
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

```javascript
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
```javascript
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
```css
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
```javascript
import style from "../css/ConditionalRendering.module.css";
```
- - `Step:4:` now use the css file inside `ConditionalRendering.jsx` file.
```javascript
<h1 className={isLoggedIn ? style.welcome : style.login}>{isLoggedIn?'Welcome User':'Please Login'}</h1>
```
- - `Step:5:` Full Code
```javascript
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

## Array and Object 

we can print the array using `map` function and print the object using `dot(.)`.

### Map Syntax
```javascript
array.map((value,index)=>(
    <li key={index}>{value}</li>
))
```

### Object Syntax
```javascript
object.key
```

we can create a component  and pass array and object as a props.

Component File - `Array_Object.jsx` and paste the below code.

```javascript
const Array_Object = ({skills,user}) => {
  return (
    <div>
        <h1>Array Print</h1>
        <ul>
            {
                skills.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))
            }
        </ul>
        <h1>Object Print</h1>
        <p>{user.name} , {user.age} years old.</p>
    </div>
  )
}

export default Array_Object
```

call the Component File inside `App.jsx` file and paste the below code.
```javascript
import Array_Object from "./components/Array_Object"

<Array_Object skills={['html','css','javascript']} user={{name:'subhankar',age:22}} />
```
> 🟡 here we use `Props` to pass data - [Click here to know more about Props](#props)



## Props

in react props are properties,using props we can pass data from one component to another component.
here we create three file named.

1. [SimpleProps.jsx](#simplepropsjsx)
2. [AdvanceProps.jsx](#advancepropsjsx)
3. [StudentInfoProps.jsx](#studentinfopropsjsx)

>⭐ Props are basically `Object`.
> ⭐⭐ Props are `Immutable` means we can't change the props value.

> ---
> ---


### SimpleProps.jsx

- `Step:1: Create a Component`

add the below code inside `SimpleProps.jsx` file. here we recive a `props` as a parameter. which is a Javascript Object. we can access the data using dot(.) notation.
```javascript
const SimpleProps = (props) => {
  return (
    <div>
        <h1>Name: {props.name} - Age:{props.age} - City:{props.city}</h1>
    </div>
  )
}

export default SimpleProps
```

- `Step:2: Call the Component`

call the component inside `App.jsx` file and paste the below code.
```javascript
import SimpleProps from "./components/SimpleProps"

<SimpleProps name="subhankar" age="22" city="kolkata"/>
```

> ---
> ---

### AdvanceProps.jsx

- `Step:1: Create a Component`

add the below code inside `AdvanceProps.jsx` file. here we recive a `name,age,city,hobbies` as a parameter. actually we use `destructuring` to get the value.

**`📌destructuring`** : Object destructuring allows you to extract properties from an object and assign them to variables. The order of variables does not matter, but their names typically must match the property names. 

Example: 
```javascript
const {name,age,city,hobbies} = props
```

```javascript
const AdvanceProps = ({name,age,city,hobbies}) => {
  return (
    <div>
        <h1>Name: {name}</h1>
        <p>Age: {age}</p>
        <p>City: {city}</p>
        <p>Hobbies: </p>
        <ul>
            {
                hobbies.map((hobby,index)=>(
                    <li key={index}>{hobby}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default AdvanceProps
```
> 🟡 for `map` function [Click here](#array-and-object)

- `Step:2: Call the Component`

call the component inside `App.jsx` file and paste the below code.
```javascript
import AdvanceProps from "./components/AdvanceProps"

<AdvanceProps name="subhankar" age="22" city="kolkata" hobbies={['coding','playing games','swimming']}/>
```

> ---
> ---

### StudentInfoProps.jsx

> in this component we show the student information such as `name`, `id` , `roll` , `hobbies` and `subjects`. which is typically complex data.

> here we see how to pass 
> 1. String Data
> 2. Number Data
> 3. Array Data
> 4. Object Data

- `Step:1: Create a Component`

add the below code inside `StudentInfoProps.jsx` file. here we recive a `student_id,name,roll,hobbies,subjects` as a parameter. actually we use `object destructuring` to get all the value.

[📌 what is Object Destructuring](#advancepropsjsx)

```javascript
const StudentInfoProps = ({student_id,name,roll,hobbies,subjects}) => {
  return (
    <div style={{border:"2px solid gray",margin:"10px",padding:"10px",borderRadius:"10px"}}>
        <h1>Student Info</h1>
        <p>Student ID: {student_id}</p>
        <p>Name: {name}</p>
        <p>Roll: {roll}</p>
        <p>Hobbies: {
                      hobbies.map((hobby)=>(<span style={{marginRight:"10px",backgroundColor:"yellow",padding:"5px",borderRadius:"5px"}}>{hobby}</span>))
                    }
        </p>
        <div>
          <p>Marks: </p> 
          <ul>
            {
              subjects.map((subject,index)=>(
                <li key={index}>{subject.name} - {subject.marks}</li>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default StudentInfoProps
```
> 🟡 for `map` function [👉 Click here](#array-and-object)

- `Step:2: Call the Component`

call the component inside `App.jsx` file and paste the below code.

> here first we take some students information and store as array of object.
```javascript
import StudentInfoProps from "./components/StudentInfoProps"

const StudentsData=[
    {
      student_id:1,
      name:"Salman Khan",
      roll:12,
      hobbies:["Acting","Playing games","Fighting"],
      subjects:[
        {name:"math",marks:35},
        {name:"science",marks:45},
        {name:"english",marks:90}
      ]
    },
    {
      student_id:2,
      name:"Amir Khan",
      roll:20,
      hobbies:["Acting","Reading books","Swimming"],
      subjects:[
        {name:"math",marks:90},
        {name:"science",marks:55},
        {name:"english",marks:70}
      ]
    },
    {
      student_id:3,
      name:"Arijit Singh",
      roll:33,
      hobbies:["Singing","Playing Guiter","Helping Others"],
      subjects:[
        {name:"math",marks:78},
        {name:"science",marks:65},
        {name:"english",marks:87}
      ]
    }
  ]


// inside return 
{
    StudentsData.map((student_data)=>(
          <StudentInfoProps 
                     student_id={student_data.student_id} 
                     name={student_data.name} 
                     roll={student_data.roll} 
                     hobbies={student_data.hobbies} 
                     subjects={student_data.subjects}
          />
    ))
}
```

> ---
> ---