// import './App.css'

import Array_Object from "./components/Array_Object"
import Body from "./components/Body"
import ConditionalRendering from "./components/ConditionalRendering"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SimpleProps from "./components/SimpleProps"
import AdvanceProps from "./components/AdvanceProps"
import StudentInfoProps from "./components/StudentInfoProps"
import FunctionEvent from "./components/FunctionEvent"
import Counter from "./components/Counter"
import LiveTextPrint from "./components/liveTextPrint"
import Form from "./components/forms/Form"
import Todo from "./components/Projects/Todo"
import UseRefState from "./components/useRefState"
import UseEffect from "./components/useEffect"
import Timer from "./components/Timer"
import WindowsWidthTracker from "./components/WindowsWidthTracker"
import Users from "./components/Users"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import { BrowserRouter,Routes,Route, useParams } from "react-router-dom"
import Home from "./components/pages/Home"
import NotFound404 from "./components/pages/NotFound404"
import Products from "./components/pages/Products"
import Mobiles from "./components/pages/Mobiles"
import Laptop from "./components/pages/Laptop"

function App() {

  // const StudentsData=[
  //   {
  //     student_id:1,
  //     name:"Salman Khan",
  //     roll:12,
  //     hobbies:["Acting","Playing games","Fighting"],
  //     subjects:[
  //       {name:"math",marks:35},
  //       {name:"science",marks:45},
  //       {name:"english",marks:90}
  //     ]
  //   },
  //   {
  //     student_id:2,
  //     name:"Amir Khan",
  //     roll:20,
  //     hobbies:["Acting","Reading books","Swimming"],
  //     subjects:[
  //       {name:"math",marks:90},
  //       {name:"science",marks:55},
  //       {name:"english",marks:70}
  //     ]
  //   },
  //   {
  //     student_id:3,
  //     name:"Arijit Singh",
  //     roll:33,
  //     hobbies:["Singing","Playing Guiter","Helping Others"],
  //     subjects:[
  //       {name:"math",marks:78},
  //       {name:"science",marks:65},
  //       {name:"english",marks:87}
  //     ]
  //   }
  // ]

  const User=()=>{
      const {id}=useParams();
      //console.log(id);
      return (
        <div>
            <h1>User Profile</h1>
            <p>User ID: {id}</p>
        </div>
      )
  }

  return (
  //  <BrowserRouter>
        <>
      <Header/> 
      {/* <Body/> */}
      {/* <ConditionalRendering/> */}
      {/* < Array_Object skills={['html','css','javascript']} user={{name:'subhankar',age:22}} /> */}
      {/* <SimpleProps name="subhankar" age="22" city="kolkata"/> */}
      {/* <AdvanceProps name="subhankar" age="22" city="kolkata" hobbies={['coding','playing games','swimming']}/> */}
      {/* {
        StudentsData.map((student_data)=>(
          <StudentInfoProps student_id={student_data.student_id} name={student_data.name} roll={student_data.roll} hobbies={student_data.hobbies} subjects={student_data.subjects}/>
        ))
      } */}
      {/* <FunctionEvent/> */}
      {/* <Counter/> */}
      {/* <LiveTextPrint/> */}
      {/* <Form/> */}
      {/* <Todo/> */}
      {/* <UseRefState/> */}
      {/* <UseEffect/> */}
      {/* <Timer/> */}
      {/* <WindowsWidthTracker/> */}
      <Routes>
          {/* <Route path="/" element={<App/>}/> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/products" element={<Products/>}>
            <Route path="mobiles" element={<Mobiles/>}/>
            <Route path="laptops" element={<Laptop/>}/>
          </Route>
          <Route path="/user/profile/:id" element={<User/>}/>
          <Route path="*" element={<NotFound404/>}/>
      </Routes>

      <Footer/>
   {/* </BrowserRouter> */}
  </>
  )
}

export default App
