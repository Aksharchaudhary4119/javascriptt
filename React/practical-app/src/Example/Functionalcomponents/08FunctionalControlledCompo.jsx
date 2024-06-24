import React, { useState } from 'react';

const FunctionalControlledCompo = () => {
    let  [inpData,setInpData] = useState ("");
    let getData = (e)=>{
        console.log("called get data function",e);
        console.log("called get data function",e.target);
        console.log("called get data function",e.target.value);
        setInpData(e.target.value);
    }
    return (
        <>
            {/* <input type='text' onChange={(e)=>{setInpData()}} name="" id=""/> */}
            <input type='text' onChange={getData} name='' id=''/>
            {inpData}
            <input type='text' onChange={(e)=>{setInpData(e.target.value)}} name="" id=""/>
        </>
    );
};

export default FunctionalControlledCompo;
