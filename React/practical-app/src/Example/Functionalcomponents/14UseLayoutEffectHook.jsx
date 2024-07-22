import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseEffectHooksInFunctionalCompo = () => {

    const [counter, setCnt] = useState(0)
    const [secondState, anything] = useState(0)
    const [refreshStatus, setRefreshStatus] = useState(true)
    useEffect(() => {
        console.log("called useEffect");
        // getData()
        // setTimeout(() => {
        //     console.log('Delayed useEffect message after 2 seconds!');
        // }, 2000);

    })

    // useLayoutEffect(() => {
    //     console.log("called useLayoutEffect");
    //     // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    //     // const timeoutId = setTimeout(() => {
    //     //     console.log('Delayed useLayoutEffect message after 2 seconds!');
    //     // }, 2000);

    //     // Cleanup function to clear the timeout if the component unmounts
    //     // return () => clearTimeout(timeoutId);
    // }, []); // Empty dependency array ensures the effect runs only once


    // useLayoutEffect(() => {
    //     console.log("called useLayoutEffect");
    // })
    // useLayoutEffect(() => {
    //     console.log("called useLayoutEffect");
    // },[refreshStatus])
    useLayoutEffect(() => {
        console.log("called useLayoutEffect");
    },[])
    // useLayoutEffect(() => {
    //     console.log("called useLayoutEffect");
    //     return () => {
    //         console.log("called return");
    //     }
    // },[])
    return (
        <>
            UseEffectHooksInFunctionalCompo
            <button onClick={() => { setCnt(counter + 1) }}>Increment {counter}</button>
            {/* <button onClick={() => { anything(secondState + 1) }}>Increment Other State Data {secondState}</button> */}
            <button onClick={() => { setRefreshStatus(!refreshStatus) }}>Refresh {JSON.stringify(refreshStatus)}</button>

            <br />
            <p>
            The purpose of useLayoutEffect is to let your component use layout information for rendering: Render the initial content. Measure the layout before the browser repaints the screen. Render the final content using the layout information you've read.
            </p>
            <p>
            useLayoutEffect is to let your component use layout information for rendering:
            </p>

            <h3>1.What is the useEffect hook and how is it different from the useLayoutEffect hook?</h3>
            <p> The useEffect hook is used in React functional components to manage side effects. The useLayoutEffect hook is a subhook of the useEffect hook that is used for side effects that must be performed before the browser paints the next frame.</p>

            <h3>2.useLayoutEffect</h3>
            <p>The React JS useLayoutEffect works similarly to useEffect but rather works asynchronously like the useEffect hook, it fires synchronously after all DOM loading is done loading. This is useful for synchronously re-rendering the DOM and also to read the layout from the DOM. But to prevent blocking the page loading, we should always use the useEffect hook.</p>

            <h3></h3>

        </>
    );
};

export default UseEffectHooksInFunctionalCompo;