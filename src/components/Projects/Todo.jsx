import { useState } from "react";
import styles from "./Todo.module.css"

const Todo = () => {

    const [todos,setTodos]=useState([]);
    const [singleTodo,setSingleTodo]=useState("");
    const [completed_count,setComepleted_count]=useState(0);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(singleTodo){
            setTodos([...todos,{todo:singleTodo,done:false}]);
            setSingleTodo("");
            //console.log(todos.length+1);
        }
    }

    const handleDelete=(delete_index)=>{
      const newTodos=todos.map((todo,index)=>index===delete_index?{...todo,done:!todo.done}:todo);
      setTodos(newTodos);
      const completedCount = todos.filter(todo => todo.done).length;
      if(newTodos[delete_index].done){
          setComepleted_count(completedCount+1);
      }else{
        setComepleted_count(completedCount-1);
      }
    }
  return (
    <div className={styles.parent_div}>
        <div className={styles.child_div}>
        <h2>Todo App</h2>
        <hr />
        <form onSubmit={handleSubmit} className={styles.form}>
             <input type="text" value={singleTodo} onChange={(e)=>setSingleTodo(e.target.value)} />
             <button type="submit" className={styles.add_btn}>Add</button>
             <span>✅: {completed_count}</span>
             <span>❌: {todos.length-completed_count}</span>
        </form>
        <ul className={styles.todo_ul}>
            {
                todos.map((todo,index)=>(
                    <li key={index}>
                        {todo.todo} -  {todo.done?<span>✅</span>:<span>❔</span>} - 
                        <button onClick={()=>handleDelete(index)} className={todo.done?styles.undo_btn:styles.done_btn}>
                            {todo.done?<span>undo</span>:<span>done</span>}
                        </button>
                    </li>
                ))
            }
        </ul>
        </div>
    </div>
  )
}

export default Todo