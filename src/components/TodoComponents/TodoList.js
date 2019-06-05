// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import { directive } from "@babel/types";
import Todo from './Todo'


  const todoData= [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

class TodoList extends React.Component {
  constructor(){
      super()
  }

  
 render(){
    const dataFromArray = todoData.map(item => <Todo key={item.id} task={item.task}/>)

    return(
        <div>
            {dataFromArray}
        </div>
    )

 }


}


export default TodoList




