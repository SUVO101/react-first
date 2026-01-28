import { useState } from 'react'

const LiveTextPrint = () => {

const [text,setText]=useState('');

  return (
    <div style={{padding:'10px'}}>
        <p>{text}</p>
        <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/>
    </div>
  )
}

export default LiveTextPrint