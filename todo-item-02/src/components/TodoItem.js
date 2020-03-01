import React, { Component } from 'react';

import classNames from 'classnames';
class TodoItem extends Component {
  render() {
    const {todoItem, onClick} = this.props;
    return (<li className={classNames({"completed": todoItem.completed})} 
      onClick={onClick}>  
      <input class="toggle" type="checkbox" checked={todoItem.completed}></input>
      <label>
        {todoItem.title}
      </label>    
      
    </li>);
  }
}  

export default TodoItem;