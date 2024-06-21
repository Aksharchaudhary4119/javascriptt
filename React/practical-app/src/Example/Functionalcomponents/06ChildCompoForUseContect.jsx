import React, { createContext, useContext } from 'react';
import GrandChild from './07GrandChild.jsx';
const Context =  createContext();

const ChildCompoForUseContect = (props) => {
    const context = useContext(Context);

    return (
        <>

            <p>Child component </p>
            {JSON.stringify(context)}
            <GrandChild DataFromParent={props.userData}/>
        </>
    );
};

export default ChildCompoForUseContect;