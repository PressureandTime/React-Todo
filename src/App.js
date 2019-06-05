import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import Todo from './components/TodoComponents/Todo'
import todoData from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
  constructor(props){
   super(props)
   this.state ={
     something:todoData,
     anotherSomething:'',
   }

  }

  onChangeHandler = event =>{
     this.setState({anotherSomething:event.target.value});

  }
  

  addTask = ()=> {
    const newTask = {
      description:'heavy lifting',
      finished : false,
    };


    this.setState({
      
      something:this.state.todoData.concat(newTask),
      anotherSomething:'',
  
    });


  }

  render() {
    return (
      <div>
       <TodoList/>
       <TodoForm value={this.state.something} onChange={this.onChangeHandler}/>

      </div>
    );
  }
}

export default App;
