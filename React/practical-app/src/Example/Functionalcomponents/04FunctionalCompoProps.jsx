import React from 'react';

const FunctionalCompoProps = () => {
    return (
        <>
          Functional Component Props

          <p>
          Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.
          </p>
          <p>
          arguments pass karva mate props no use thay chhe
          </p>
          <h1>Interview Questions</h1>

          <h3>1.What is Props?</h3>
          <p>Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.</p>
          <h3>
          2. What are props in React?
          </h3>
          <p>The props in React are the inputs to a component of React. They can be single-valued or objects having a set of values that will be passed to components of React during creation by using a naming convention that almost looks similar to HTML-tag attributes. We can say that props are the data passed from a parent component into a child component.</p>

         <p>The main purpose of props is to provide different component functionalities such as:</p>

         <ul>
          <li>Passing custom data to the React component.</li>
          <li>Using through <button>this.props.reactProp</button>inside render() method of the component.</li>
          <li>Triggering state changes.</li>
         </ul>

         <p>For example, consider we are creating an element with reactProp property as given below:
         {/* <Element reactProp = "1" /> */}
        </p>
        <p>
        This reactProp name will be considered as a property attached to the native props object of React which already exists on each component created with the help of React library:  <button>props.reactProp;</button>
        </p>
        <h3> Explain React Props</h3>
        <h4>Props</h4>
        <ul>
          <li>Immutable</li>
          <li>Has better performance</li>
          <li>Can be passed to child components</li>
        </ul>

        <ul>
          <li>React Props</li>
        </ul>
        <p>Every React component accepts a single object argument called props (which stands for “properties”).  These props can be passed to a component using HTML attributes and the component accepts these props as an argument.</p>

        <p>Using props, we can pass data from one component to another.</p>

        <p>Passing props to a component:</p>

        <p>While rendering a component, we can pass the props as an HTML attribute:</p>

         <button>
        <  anything brand="Mercedes"/ >
         </button>

         <p>The component receives the props:</p>

         <p>In Class component:</p>

            {/* class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: this.props.brand,
        color: "Black"
      };
    }   */}

    <p>In Functional component:</p>

    {/* function Car(props) {
let [brand, setBrand] = useState(props.brand);
    } */}


     <p>Note- Props are read-only. They cannot be manipulated or changed inside a component.</p> 

<h3>3.Differentiate between props.</h3>
<ul>

  <ol>1.Receive initial value from parent component</ol>
  <ol>2. Parent component can change value</ol>
  <ol>3. Set default values inside component</ol>
  <ol>4. Set initial value for child components</ol>
  <ol>5. Changes inside child components</ol>

</ul>

<h3>4.What is prop drilling and its disadvantages?</h3>
<p>Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level. The problem with Prop Drilling is that whenever data from the Parent component will be needed, it would have to come from each level, Regardless of the fact that it is not needed there and simply needed in last.</p>

        </>
    );
};

export default FunctionalCompoProps;