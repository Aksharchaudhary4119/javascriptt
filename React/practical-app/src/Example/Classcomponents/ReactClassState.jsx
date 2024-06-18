import React, { Component } from 'react'

class ReactClassState extends Component { 
  constructor(props) {
    super(props);
    this.state = {color: "yellow"};
    }
    
  render() {
    let data = "testing"
    let btnclick  = (params) =>{ 
      console.log("called");
      data = "change"
      this.setState({color: "red"})
    }
    
    // function btnclick  (params) {  
    //     console.log(data);
    //     data = "change"
        
    // }  
    return (
      <>
        State {data}
        <button onClick={btnclick}>Click</button>
        <p>color: {this.state.color}</p>
        <p>Because of virtual DOM we are not able to make changes is simple variable thats why we need to adopt states in reactJs  </p>
        <p>in class compo we are define / declare states in constructor</p>
      </>
    )
  }
}

export default ReactClassState;
