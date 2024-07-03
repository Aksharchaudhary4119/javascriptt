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

        </>
    );
};

export default UseEffectHooksInFunctionalCompo;