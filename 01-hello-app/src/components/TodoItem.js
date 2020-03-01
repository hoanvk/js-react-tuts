import React from 'react';
import './TodoItem.css'


class TodoItem extends React.Component {
  render() {
    var classNames = require('classnames');
    const { item } = this.props;
    let className = classNames('TodoItem', { 'TodoItem-complete': item.complete });
    
    return (
      <div className={className}> 
        {item.title}
      </div>
    );
  }
}

export default TodoItem;
