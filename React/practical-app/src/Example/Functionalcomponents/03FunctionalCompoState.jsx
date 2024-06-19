import React from 'react';
import { useState } from 'react';

const FunctionalCompoState = () => {
    let [kaipan,setData] = useState("init val");
    let data = "testing"
    let changeData= () => {
        console.log("called");
        data = "checking"
        setData ("Change")
    }
    return (
        <>
        FunctionCompoState
        <p>variable Data : {data}</p>
         <button onClick={changeData}>change</button>
         <p>State Data : {kaipan}</p>   
        </>
    );
};

export default FunctionalCompoState;