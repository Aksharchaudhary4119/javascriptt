import React, { useRef, useState } from 'react';

const UseRefEffectHooksInFunctionalCompo = () => {
    const [data, anything] = useState(null)
    const focusPoint = useRef(null)
    const onClickHandler = (event) =>{
        
        // console.log(focusPoint);
        console.log(event);
        console.log(event.target);
         // console.log(focusPoint.current);
        // console.log(focusPoint.current.value);
        focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();
        
    }

    return (
        <>
            <div>
                <button onClick={onClickHandler}>
                    ACTION
                </button>
            </div>
            <label>
                Click on the action button to
                focus and populate the text.
            </label><br />
            <textarea ref={focusPoint} />
            <textarea onChange={(event) => {
                console.log(event);
                console.log(event.target);
                console.log(event.target.value);
                // anything("test")
                anything(event.target.value)
             }}/>
           {data}

           <p>
           useRef is a React Hook that lets you reference a value that's not needed for rendering. const ref = useRef(initialValue) useRef(initialValue)
           </p>

           <h3>1.What is useRef hook in react?</h3>
           <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. </p>
           


           <h3>2.When would you use useRef</h3>
           <p> useRef is used in React functional components when you need to keep a mutable value around across renders without triggering a re-render. It's commonly used for accessing DOM elements, caching values, or storing mutable variables.</p>

           <h3>3.Reasons to use useRef hook</h3>
           <p>The main use of useRef hook is to access the DOM elements in a more efficient way as compared to simple refs. Since useRef hooks preserve value across various re-renders and do not cause re-renders whenever a value is changed they make the application faster and helps in caching and storing previous values</p>
        </>
    );
};

export default UseRefEffectHooksInFunctionalCompo;