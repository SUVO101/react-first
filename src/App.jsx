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

  return (
   <div>
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
      <Users/>
      <Footer/>
   </div>
  )
}

export default App
