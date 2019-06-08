// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import { directive } from '@babel/types';
import Todo from './Todo';
import './Todo.css';

class TodoList extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      <div className="todo-wrapper">

        {

         this.props.newtask.map((item) => ( 
           
         <Todo 
         key={item.id} 
         task={item.task} taskId={item.id}
         check={item.completed}  
         itemCompleted={this.props.markItemAsCompletedFunction} />))

       }
      </div>
    );
  }


}

export default TodoList;




