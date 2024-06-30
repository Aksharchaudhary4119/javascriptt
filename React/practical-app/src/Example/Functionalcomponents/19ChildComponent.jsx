import React, { useState } from 'react';

const ChildComponent = (props) => {
    let [ state,setState ] = useState("data");
    return (
        <>
            {props.title}
            {<input type='text' onChange={(event) => {props.func (event.target.value)}} name='' id=''/>}
            {<input type='text' onChange={(e) => { setState (e.target.value)}} name='' id=''/>}
            {<input type='text' onChange={(e) => {props.func (e.target.value)}} name='' id=''/>}
        </>
    );
};

export default ChildComponent;