import { useState } from "react"

const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div style={{padding:"10px",display:"flex",gap:"10px"}}>
        <button onClick={()=>setCount(count+1)}>Increment Count: {count} </button>
        <button onClick={()=>setCount(count-1)}>Decrement Count: {count} </button>
    </div>
  )
}

export default Counter