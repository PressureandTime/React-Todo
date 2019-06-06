// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import { directive } from '@babel/types';
import Todo from './Todo';
// import todoData from './todoData'


class TodoList extends React.Component {

  constructor() {
    super();
  }

  render() {



    
    return (
      <div>
        {/* {dataFromArray} */}

        {
         this.props.newtask.map((item) => ( <Todo 
         key={item.id} 
         task={item.task} taskId={item.id}  
         itemCompleted={this.props.markItemAsCompletedFunction} />))
       }
      </div>
    );
  }


}


export default TodoList;




