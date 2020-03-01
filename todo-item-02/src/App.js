import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { 
          title: "Thuc day",
          completed: false
        },
        { 
          title: "Danh rang",
          completed: false
        },
        { 
          title: "Mac quan ao",
          completed: true
        }
      ]
    }
    
  }
  
  onItemClicked(todoItem) {
    return (event) => {
      console.log(todoItem);
      let {todoItems} = this.state;
      let selected = todoItems.find(x => x.title === todoItem.title);
      selected.completed = !selected.completed;  
      this.setState({
        todoItems: todoItems
      })
    }
  }
  render() {
    const {todoItems} = this.state;
    
    return (      
      <div className="App todoapp">
        <header className="header">
          <input class="new-todo" placeholder="What needs to be done?" value="">

          </input>
        </header>
        <section className="main">
          <input id="toggle-all" class="toggle-all" type="checkbox"></input>
          <label for="toggle-all"></label>
          <ul className="todo-list">
          {          
            todoItems.length && todoItems.map((todoItem, index) => 
            <TodoItem key={index} 
            todoItem={todoItem}
            onClick={this.onItemClicked(todoItem)} />)
          }
          </ul>
        </section>
        <footer className="footer"></footer>
      </div>
    );
  }  
}

export default App;
