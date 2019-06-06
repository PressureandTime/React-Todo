// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import { directive } from "@babel/types";
import Todo from './Todo'
// import todoData from './todoData'


 

  

function TodoList(props)  {
 
    const dataFromArray = props.newtask.map(item => <Todo key={item.id} task={item.task}/>)

    return(
        <div>
            {dataFromArray}
        </div>
    )

 


}


export default TodoList




