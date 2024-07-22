import React, { useState } from 'react';

const FunctionalControlledCompo = () => {
    let  [inpData,setInpData] = useState ("");
    let getData = (e)=>{
        // console.log("called get data function",e);
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

            <p>
                controlled component input fill and handle 
            </p>

            <h1>Interview Questions</h1>

            <h3>
                Controlled Component
            </h3>
            <p>1.The component is under control of the component’s state.</p>
            <p>2.These components are predictable as are controlled by the state of the component.</p>
            <p>3.Internal state is not maintained</p>
            <p>4.It accepts the current value as props</p>
            <p>5.Does not maintain its internal state.</p>
            <p>6.Controlled by the parent component.</p>
            <p>7.Have better control on the form data and values</p>

            <h3>2.Controlled components</h3>
            <p>In a controlled component, form data is handled by a React component's state. The component renders a form element and controls what happens in that form on subsequent user input. The component's state is updated with each user input, and the component re-renders with the updated state.</p>

            <h3>3. What are controlled components in React?</h3>
            <p>Controlled components in React refer to the components that have the ability to maintain their state. The data is completely controlled by the parent component, and the current value is fetched by making use of props. This is done to notify users of any changes that occur when using callbacks.</p>


            

            <h3></h3>
        </>
    );
};

export default FunctionalControlledCompo;
