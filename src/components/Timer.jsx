import { useEffect, useState } from 'react'

const Timer = () => {
  const [sec,setSec]=useState(0);
  
    //  useEffect(()=>{
    //     const interval=setInterval(()=>{
    //         //setSec(sec+1);
    //         setSec((prev)=>prev+1);
    //     },1000);  
        
    //     return ()=>{
    //         clearInterval(interval);
    //     } 
    //   },[]);
  
    return (
      <div>
          <p>{sec}</p>
      </div>
    )
}

export default Timer