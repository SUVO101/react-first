import { useState } from 'react'
import styles from './Form.module.css'

const Form = () => {

  const [form,setForm]=useState({
    name:"Guest",
    age:18,
    date:new Date().toISOString().split('T')[0],
    gender:"male",
    hobby:[],
    country:"india",
    file:null,
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(form);
  }

  const handleHobby=(e)=>{
    const {value,checked}=e.target;
    setForm((prev)=>{
      if(checked){
      // add item
      if(!form.hobby.includes(value)){
         return {...prev,hobby:[...prev.hobby,value]} 
      }
      // if already exists return previous state
      return prev;
    }else{
      // remove item
      return { ...prev, hobby:prev.hobby.filter((item)=>item!==value)}
    }
    })
  }

  return (
    <div style={{ padding: "10px", border: "1px solid gray" }}>
      <form onSubmit={handleSubmit}>
        <label>
            Enter Name: 
            <input 
              type="text"
              name="name" 
              value={form.name} 
              onChange={(e)=>setForm({...form,name:e.target.value})}/>
        </label>
        <br />
        <label>
            Enter Age: 
            <input 
              type="number" 
              min={18}
              max={80}
              value={form.age} 
              onChange={(e)=>setForm({...form,age:e.target.value})}
            />
        </label>
        <br />
        <label>
            Enter D.O.B: 
            <input 
              type="date" 
              name="date"
              value={form.date} 
              onChange={(e)=>setForm({...form,date:e.target.value})}
            />
        </label>
        <br />
        <label>
            Select Gender: 
          <input 
            type="radio" 
            name="gender" 
            value="male" 
            checked={form.gender==="male"}
            onChange={(e)=>setForm({...form,gender:e.target.value})}
            />
          Male
          <input 
            type="radio" 
            name="gender" 
            value="female" 
            checked={form.gender==="female"}
            onChange={(e)=>setForm({...form,gender:e.target.value})}
            />
          Female
        </label>
        <br />
        <label>
            Select Hobbies: 
          <input 
            type="checkbox" 
            name="hobby" 
            value="reading" 
            checked={form.hobby.includes("reading")}
            onChange={handleHobby}
          />
          Reading
          <input 
            type="checkbox" 
            name="hobby" 
            value="traveling"
            checked={form.hobby.includes("traveling")}
            onChange={handleHobby}
           />
          Traveling
          <input 
            type="checkbox" 
            name="hobby" 
            value="sports" 
            checked={form.hobby.includes("sports")}
            onChange={handleHobby}
          />
          Sports
        </label>
        <br />
        <label>
            Select Country: 
          <select name="country" value={form.country} onChange={(e)=>setForm({...form,country:e.target.value})}>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
        </label>
        <br />
        <label>
          <img src={form.file ? URL.createObjectURL(form.file) : null} alt="no image" width={100} height="auto" style={{border:"1px solid black",marginTop:"10px"}} />
          <input type="file" name="file" accept='image/*' onChange={(e)=>setForm({...form,file:e.target.files[0]})}/>
        </label>
        <br />
        <div className={styles.btn}>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form