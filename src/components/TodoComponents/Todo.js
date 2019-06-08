import React from "react"



function Todo(props) {
  
    // console.log(props)
   return(
       
       <div className="individual-task"> 
       <p className={`${props.check === true ? 'completed' : ''}`}
       onClick={() => props.itemCompleted(props.taskId)}>
    
        {props.task} </p>
      
       </div>
   )
  
  }
  
  
  
  
  export default Todo
  
  
  