const StudentInfoProps = ({student_id,name,roll,hobbies,subjects}) => {
  return (
    <div style={{border:"2px solid gray",margin:"10px",padding:"10px",borderRadius:"10px"}}>
        <h1>Student Info</h1>
        <p>Student ID: {student_id}</p>
        <p>Name: {name}</p>
        <p>Roll: {roll}</p>
        <p>Hobbies: {
                      hobbies.map((hobby)=>(<span style={{marginRight:"10px",backgroundColor:"yellow",padding:"5px",borderRadius:"5px"}}>{hobby}</span>))
                    }
        </p>
        <div>
          <p>Marks: </p> 
          <ul>
            {
              subjects.map((subject,index)=>(
                <li key={index}>{subject.name} - {subject.marks}</li>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default StudentInfoProps