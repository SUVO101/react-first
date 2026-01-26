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