import React , { useEffect, useLayoutEffect, useState } from 'react';

const UseEffectHook = () => {
    let [counter, setCounter] = useState(0)
    let [newUser, setNewUser] = useState(true)

    // Simple Effects wihout Cleanup or wihout Dependancy START
    //     useEffect (()=>{
    //     console.log("useEffect called");
    // })
    // Simple Effects wihout Cleanup or wihout Dependancy END
    
    
    // Effects wihout Cleanup or with EmptyDependancy START
        // useEffect(() =>{
        //     console.log("useEffect called");
        // },[] )
        // Simple Effects wihout Cleanup or wihout EmptyDependancy END
        

        // Effects wihout Cleanup or with SpecificDependancy START
        useEffect(() => {
            console.log("useEffect called");
        },[newUser])
        // Effects wihout Cleanup or with SpecificDependancy END


        useLayoutEffect(() =>{
            console.log("called akshar");
        },[newUser])

            // Effects with Cleanup START
            // useEffect(() => {
            //     console.log("useEffect called");
            //     return (()=>{
            //         console.log("called function");
            //     })
            // }, [])
            // Effects with Cleanup END


    return (
        <>


            <p> The useEffect Hook allows you to perform side effects in your components.</p>
            <p> Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
            <p> useEffect accepts two arguments. The second argument is optional.</p>
            <p> useEffect(&lt;function&gt;, &lt;dependency&gt;)</p>
            <p>just like constructor in class component we are going to be adopt that concept using useEffect() hook in functional component </p>
             <button className='btn btn-sm-btn-info' onClick={() => {console.log("called btn click"); setCounter(counter + 1)}}>Increament</button>
             &nbsp;{counter} &nbsp;
             <button className='btn btn-sm btn-danger' onClick={() => { console.log("called btn click"); setCounter(counter - 1) }}>Decrement</button>
             <br />
             <br />
             <button className='btn btn-sm btn-danger' onClick={() =>{console.log("called btn click"); setNewUser(!newUser)}}>Add</button>
             <h3>Effects with Cleanup</h3>
            <p>Effects with Cleanup will be called where we leave that component</p>
            <p>Effects with Cleanup will helps to remove data from memory like we set some data by fetching API while calling useEffect and wants to remove that data from the states whlie we leave that component that time we can use cleanup</p>
            <br />
            <p>
            The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.
            </p>

            
           <p>useEffect accepts two arguments. The second argument is optional.</p>
        </>
    );
};

export default UseEffectHook;