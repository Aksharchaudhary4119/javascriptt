// import React, { useState } from 'react';
// import ChildCompoForUseContect from "./06ChildCompoForUseContect.jsx";

// const UseContextCosutomHook = () => {
//     const [user,SetUser] = useState("/je nakho ae show thay")
//     return (
//         <>
//         <h1>{ `Hello-je nakho ae ${user}!`}</h1>
//             <ChildCompoForUseContect userData = {user}/>
//         </>
//     );
// };

// export default UseContextCosutomHook;



import React, { createContext, useState } from 'react';
import ChildCompoForUseContect from "./06ChildCompoForUseContect.jsx";

const Context = createContext() 

const UseContextCosutomHook = () => {
    const [user,SetUser] = useState("/je nakho ae show thay")
    return (
        <>
        <Context.Provider value={ "Data From context"}>
            <ChildCompoForUseContect />
        </Context.Provider>
        </> 
    );
};

export default UseContextCosutomHook;