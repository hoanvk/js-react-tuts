import React from 'react';

import './App.css';
import TodoItem from './components/TodoItem';
function App() {
  var todoItems = [
    { title: 'An sang', complete: true }, 
    { title: 'Uong cafe', complete: false }, 
    { title: 'Da bong', complete: false }
  ];
  return (
    <div className="App">
      { 
        todoItems.map((todoItem, index) => <TodoItem key={ index } item={ todoItem } />)
      }     
    </div>
  );
}

export default App;
