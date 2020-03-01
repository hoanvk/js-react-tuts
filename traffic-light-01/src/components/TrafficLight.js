import React, { Component } from 'react';
import './TrafficLight.css';
var classNames = require('classnames');
const RED = 1;
const ORANGE = 2;
const GREEN = 3;

class TrafficLight extends Component{
  constructor() {
    super();
    this.state = {
      currentColor: RED
    } 

    setInterval(() => {
      console.log(this.state.currentColor);
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      });
    }, 1000)
  }
  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
        break;
      case ORANGE:
        return GREEN;
        break;    
      default:
        return RED;
        break;
    }
  }
  render() {
    const { currentColor } = this.state;
    return (<div className="TrafficLight">
      <div className={classNames('bulb red', { active: currentColor === RED })} />
      <div className={classNames('bulb orange', { active: currentColor === ORANGE })} />
      <div className={classNames('bulb green', { active: currentColor === GREEN })} />
    </div>);
  }
}

export default TrafficLight;
