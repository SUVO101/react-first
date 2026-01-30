import { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log(count);
        document.title=`Count:${count}`;
    },[count]);

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count:{count}</button>
    </div>
  )
}

export default UseEffect