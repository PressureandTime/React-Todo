import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import Todo from './components/TodoComponents/Todo'
import todoData from './components/TodoComponents/todoData'
import TodoForm from './components/TodoComponents/TodoForm'


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
  constructor(){
   super()
   this.state ={
     something:todoData,
     anotherSomething:'',
   }

  }

  onChangeHandler = event =>{
     this.setState({anotherSomething:event.target.value});

  }
  

  addTask = (event)=> {
   
    event.preventDefault()
    const newTask = {
      id: new Date().getTime(),
      task:this.state.anotherSomething,
      completed : false,
    };


    this.setState({
      
      something:this.state.something.concat(newTask),
      anotherSomething:'',
  
    });


  }

  render() {
    return (
      <div>
       <TodoList newtask={this.state.something}/>
       <TodoForm text={this.addTask} value={this.state.anotherSomething} onChange={this.onChangeHandler}/>

      </div>
    );
  }
}

export default App;
