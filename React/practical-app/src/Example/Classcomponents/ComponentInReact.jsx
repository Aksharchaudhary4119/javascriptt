import React, { Component } from "react";

class ComponentInReact extends Component {
  render() {
    return (
      <>
        <h3>React Component</h3>
    
        <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.</p>

        <p>Components come in two types, Class components and Function components, in this chapter you will learn about Class components.</p>

        <h3>Create a Class Component</h3>
        <p>When creating a React component, the component's name must start with an upper case letter.</p>

        <p>The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.</p>

        <p>The component also requires a render() method, this method returns HTML.</p>

      </>
    );
  }
}

export default ComponentInReact;
