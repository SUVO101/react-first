import { useEffect, useState } from 'react'

const WindowsWidthTracker = () => {
    const [width,setWidth]=useState(window.innerWidth);
    useEffect(()=>{
        const handleWidth=()=>{
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize',handleWidth);
        return ()=>{    
            window.removeEventListener('resize',handleWidth);
        }

    },[])
  return (
    <div>
        <h1>Windows Width Tracker</h1>  
        <p>Current Width: {width}</p>
    </div>
  )
}

export default WindowsWidthTracker