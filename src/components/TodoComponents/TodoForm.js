import React from "react"



function TodoForm(props) {
   
     return(
        <form>
        <input 
        type="text" 
        value={props.task}
        onChange={props.onChangeHandler}
        
         />





        <button>Add Todo</button>
        <input type="text"/>
        <button>Clear Completed</button>

       </form>
         
     )

  
  }
  
  
  
  
  
  
  export default TodoForm
  
  