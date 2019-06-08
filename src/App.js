import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import todoData from './components/TodoComponents/todoData'
import TodoForm from './components/TodoComponents/TodoForm'
import './styles.css'
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

  removeCompleted = () => {
     let isItcompleted = this.state.something;
     console.log(isItcompleted);
     isItcompleted = isItcompleted.filter((item) => item.completed !== true);
     this.setState({something:isItcompleted})
     console.log(isItcompleted)
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

  markItemAsCompleted = (id) => {
    
     const newItems =  this.state.something.map(item => {
       if (item.id === id) {
        item.completed = !item.completed
        return item;
       }
       return item;
     })
    
     this.setState({something:newItems})
  }

  render() {
    return (
      <div className="app-wrapper">
       <TodoList 
       newtask={this.state.something}
       markItemAsCompletedFunction={this.markItemAsCompleted}
       checkIfcompleted={this.state.something.completed}
       />
        <br/><br/>
       <TodoForm text={this.addTask} 
       value={this.state.anotherSomething} 
       onChange={this.onChangeHandler}
        remove={this.removeCompleted}
       />

      </div>
    );
  }
}

export default App;





