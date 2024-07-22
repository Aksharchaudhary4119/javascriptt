import React, { useState } from 'react';
import ChildComponent from './19ChildComponent.jsx';

const StateLiftingInFunctionalCompo = () => {
    const [statedata, setStatedata] = useState();
    const parentFunc = (data) => {
        // setStatedata(data)
        // console.log("called parent function",data);
        setStatedata(data)
    }
    return (
        <>

            <p>Parent State : {statedata}</p>
            {/* <button>Click Parent</button> */}
            <ChildComponent title="testing" func={parentFunc} />  {statedata}

<br />

<br />
            <p>
            In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.
            </p>
            
        </>
    );
};

export default StateLiftingInFunctionalCompo;