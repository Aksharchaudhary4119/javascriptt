import React, { Component } from "react";
import PropTypes from "prop-types";

class ReactClassLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

//   componentWillMount() {
//     console.log("componentWillMount");
//   }
  
  componentDidMount() {
    console.log("componentDidMount");
  }

//   componentWillReceiveProps(nextProps) {
//     console.log("componentWillReceiveProps");
//   }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
  }

//   componentWillUpdate(nextProps, nextState) {
//     console.log("componentWillUpdate");
//   }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
        <div>
        <ol>
             <li>componentWillMount() &#123;console.log("componentWillMount") &#125;</li>
             <li>componentDidMount() &#123; console.log("componentDidMount"); &#125;</li>
             <li>componentWillReceiveProps(nextProps) &#123;  console.log("componentWillReceiveProps"); &#125;</li>
             <li>shouldComponentUpdate(nextProps, nextState) &#123; console.log("shouldComponentUpdate"); &#125;</li>
             <li>componentWillUpdate(nextProps, nextState) &#123;  console.log("componentWillUpdate"); &#125;</li>
             <li>componentDidUpdate(prevProps, prevState) &#123; console.log("componentDidUpdate"); &#125;</li>
             <li>componentWillUnmount() &#123;  console.log("componentWillUnmount"); &#125;</li>
             <li>render() &#123; console.log("render"); &#125;</li>
        </ol>
    </div>
    );
  }
}

ReactClassLifeCycle.propTypes = {
    
};

export default ReactClassLifeCycle;
