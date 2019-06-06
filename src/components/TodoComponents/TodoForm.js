import React from "react"



function TodoForm(props) {
   
     return(
        <form onSubmit={props.text}>
        <input 
        type="text" 
        value={props.value}
        onChange={props.onChange}
        
         />





        <button>Add Todo</button>
        <input type="text"/>
        <button>Clear Completed</button>

       </form>
         
     )

  
  }
  
  
  
  
  
  
  export default TodoForm
  
  