import React, { createContext, useContext } from 'react';
// import UseContextComp from './05UseContext.jsx';
// const UserContext = createContext ();
const Context = createContext ();


const GrandChild = (props) => {
    const user = useContext(Context);
    return <div> testing{useContext}</div>
    
    // return (
    //     <>
    //         <p>Grand Child component : {props.DataFromParent}</p>
    //         {user}
    //     </>
    // );
};

export default GrandChild;
