import React, { createContext, useContext } from 'react';
import {Context} from './05UseContext';


const GrandChild = (props) => {
    const context = useContext(Context);
    return <div> testing{useContext}</div>
    
    // const user = useContext(Context);
    // return (
    //     <>
    //         <p>Grand Child component : {props.DataFromParent}</p>
    //         {user}
    //     </>
    // );
};

export default GrandChild;
