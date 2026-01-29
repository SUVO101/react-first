import { useRef } from "react"

const UseRefState = () => {
    const nameRef = useRef()
    const emailRef = useRef()

    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        nameRef.current.focus()
    }

  return (
    <div style={{padding:"20px",border:"1px solid black"}}>
        <h2>useRef</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={nameRef} style={{margin:"10px"}}/><br/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} style={{margin:"10px"}}/><br/>

            <button style={{margin:"10px"}}>Submit</button>
        </form>
    </div>
  )
}

export default UseRefState