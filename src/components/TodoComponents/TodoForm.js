import React from 'react';
import './Todo.css';

function TodoForm(props) {
  return (
    <form className="form-with-inputs" onSubmit={props.text}>

      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
         />

      <button><strong> Add Todo</strong></button>
      <input type="text" />

      <button 
      onClick={props.remove}><strong> Remove Completed</strong>
      </button>

    </form>

  );

}


export default TodoForm;


