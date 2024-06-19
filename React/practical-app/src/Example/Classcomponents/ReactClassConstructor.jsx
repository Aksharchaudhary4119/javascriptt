import React, { Component } from 'react'

class ReactClassConstructor extends Component {
    constructor(props) {
        // super(props); Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(props);
        console.log("constructor called");
        this.state = {color: "yellow"};
        }
        
        render() {
            console.log("render called");
            return (
      <>
        Constructor
        <p>Constructor is method wich is invokde by default when objects are created</p>
        {this.state.color}
      </>
    )
  }
}
export default ReactClassConstructor;
