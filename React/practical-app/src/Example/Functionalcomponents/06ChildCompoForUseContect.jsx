import React, { createContext, useContext } from 'react';

import GrandChild from './07GrandChild.jsx';
// const Context =  createContext();

const ChildCompoForUseContect = () => {
    // const anything = useContext(Context);
    // return <div>Context Data : {JSON.stringify(context) }</div>
    // return <div>Context Data : {anything.Data }</div>
    // return <div>Context Data : {context.Data }</div>
// };   

// // const ChildCompoForUseContect = (props) => {
//         const context = useContext(Context);

    return (
    <>
    {/* { <P> Child component  : {props.userData}</P>} */}
    <p>Child component</p>
    <GrandChild/>
    {/* { <GrandChild DataFromParent={props.userData}>} */}
    </>
    );
};
export default ChildCompoForUseContect;



//     return (
//         <p>

//             <p>Child component </p>
//             {JSON.stringify(context)}
//             <GrandChild DataFromParent={props.userData}/>
//         </>
//     );
// };

// export default ChildCompoForUseContect;