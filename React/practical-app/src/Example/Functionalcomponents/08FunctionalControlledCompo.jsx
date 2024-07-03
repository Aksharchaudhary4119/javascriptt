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

            <p>
                
In React, the Controlled Component pattern involves managing the component's state through React's state system. The component's state is controlled and updated by React, and changes are reflected through props. This pattern allows for a more predictable and controlled flow of data in the application.
            </p>
        </>
    );
};

export default FunctionalControlledCompo;
