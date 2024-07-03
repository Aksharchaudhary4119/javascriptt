import React, { useReducer, useState} from 'react';

const kuchbhi = (state, action) => {
    console.log("State", state, "Action", action);
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            break;
    }
}

const UseReducerHookInFunctionalCompo = () => {
    const [counter,setCounter] = useState(0)
    const [state, dispatch] = useReducer(kuchbhi, { count: 0 })

    return (
        <>
        <p>useReducer is a React Hook that lets you add a reducer to your component.</p>
        {/* <button onClick={() => setCounter(counter + 1)} > Click Here </button>
        <button onClick={() => setCounter(counter - 1)} > Click Here </button> */}
        {/* <button onClick={increment} > Click Here </button> */}
        {/* <button onClick={() => setCounter(counter - 1)} > Click Here </button> */}
        <div className='d-flex p-2 bd-highlight'>
        <button className='btn btn-success fs-5 mx-3' onClick={() => { dispatch({ type: "INCREMENT" }); }} > + </button>
        <h2 className='fs-1'>{state.count}</h2>
        <button className='btn btn-danger fs-5 mx-3' onClick={() => { dispatch({ type: "DECREMENT" }); }} > - </button>

        </div>
             
        </>
    );
};

export default UseReducerHookInFunctionalCompo;