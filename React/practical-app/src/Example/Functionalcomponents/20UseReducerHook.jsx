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
             
             <ul class="ms-6 my-3 list-disc"><li class="leading-relaxed mb-1"><a class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal" href="#reference">Reference </a><ul class="ms-6 my-3 list-disc"><li class="leading-relaxed mb-1"><a class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal" href="#usereducer"><code dir="ltr" class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px">useReducer(reducer, initialArg, init?)</code> </a></li><li class="leading-relaxed mb-1"><a class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal" href="#dispatch"><code dir="ltr" class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px">dispatch</code> function </a></li></ul></li><li class="leading-relaxed mb-1"><a class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal" href="#usage">Usage </a><ul class="ms-6 my-3 list-disc"><li class="leading-relaxed mb-1"><a class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal" href="#adding-a-reducer-to-a-component">Adding a reducer to a component </a></li><li class="leading-relaxed mb-1"><a class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal" href="#writing-the-reducer-function">Writing the reducer function </a></li><li class="leading-relaxed mb-1"><a class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal" href="#avoiding-recreating-the-initial-state">Avoiding recreating the initial state </a></li></ul></li><li class="leading-relaxed mb-1"><a class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal" href="#troubleshooting">Troubleshooting </a><ul class="ms-6 my-3 list-disc"><li class="leading-relaxed mb-1"><a class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal" href="#ive-dispatched-an-action-but-logging-gives-me-the-old-state-value">I’ve dispatched an action, but logging gives me the old state value </a></li><li class="leading-relaxed mb-1"><a class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal" href="#ive-dispatched-an-action-but-the-screen-doesnt-update">I’ve dispatched an action, but the screen doesn’t update </a></li><li class="leading-relaxed mb-1"><a class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal" href="#a-part-of-my-reducer-state-becomes-undefined-after-dispatching">A part of my reducer state becomes undefined after dispatching </a></li><li class="leading-relaxed mb-1"><a class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal" href="#my-entire-reducer-state-becomes-undefined-after-dispatching">My entire reducer state becomes undefined after dispatching </a></li><li class="leading-relaxed mb-1"><a class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal" href="#im-getting-an-error-too-many-re-renders">I’m getting an error: “Too many re-renders” </a></li><li class="leading-relaxed mb-1"><a class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal" href="#my-reducer-or-initializer-function-runs-twice">My reducer or initializer function runs twice </a></li></ul></li></ul> 
        </>
    );
};

export default UseReducerHookInFunctionalCompo;