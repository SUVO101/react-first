
const Array_Object = ({skills,user}) => {
  return (
    <div>
        <h1>Array Print</h1>
        <ul>
            {
                skills.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))
            }
        </ul>
        <h1>Object Print</h1>
        <p>{user.name} , {user.age} years old.</p>
    </div>
  )
}

export default Array_Object