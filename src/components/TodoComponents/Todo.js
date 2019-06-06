import React from "react"



function Todo(props) {
  
   return(
       <div onClick={() => props.itemCompleted(props.taskId)}>
    
        {props.task}
       </div>
   )
  
  }
  
  
  
  
  export default Todo
  
  
  