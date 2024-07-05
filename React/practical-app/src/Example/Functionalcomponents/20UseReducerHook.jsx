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

        <p>
            The useReducer Hook is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second. useReducer returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it.</p>
            <p>[[UseReducer hūkanō upayōga sṭēṭa hūkanī jēma ja sṭēṭsanē sṭōra karavā anē apaḍēṭa karavā māṭē thāya chē. Tē tēnā prathama parimāṇa tarīkē rīḍyusara phaṅkśana anē bījā tarīkē prārambhika sthiti svīkārē chē. UseReducer ē ērē āpē chē jē vartamāna sthiti mūlya dharāvē chē anē ēka ḍispēca phaṅkśana kē jēmāṁ tamē kriyā pasāra karī śakō chō anē pachīthī tēnē bōlāvī śakō chō.]]
            </p>
             
        </>
    );
};

export default UseReducerHookInFunctionalCompo;