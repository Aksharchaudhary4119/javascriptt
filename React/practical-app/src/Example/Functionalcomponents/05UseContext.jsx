import React, { createContext, useContext, useState } from "react";
import Child5 from "./06ChildCompoForUseContect";
import { Link, Outlet } from "react-router-dom";
export const Context = createContext();
// export const AppContext = createContext(null);
// export const AppContext = createContext(null);
// const Child5 = () => {
//   const context = useContext(Context);
//   return <div>Context Data : {context.data}</div>;
// };

const Child4 = () => {
  return <Child5 />;
};

const Child3 = () => {
  return <Child4 />;
};

const Child2 = () => {
  return <Child3 />;
};

const Child = () => {
  return <Child2 />;
};

const UseContextCustomHook = () => {
    const [username,setUsername] = useState("default");

    return (
    // <Context.Provider value={{ data: "Data from context!" }}>
    <>
    <ol>
        <li>Theme <a href="https://www.freecodecamp.org/news/react-context-in-5-minutes/">Example</a>  </li>
        <li>Login Logout <a href="https://dev.to/hey_yogini/usecontext-for-better-state-management-51hi">Example</a></li>
        <li>user Name Data pass in all compo <a href="https://dmitripavlutin.com/react-context-and-usecontext/">Example</a></li>
        <li>Notication</li>
        <li>Books data <a href="https://www.robinwieruch.de/react-usecontext-hook/">Ref</a></li>
    </ol>

    <p>
    The useContext Hook provides function components access to the context value for a context object. It: Takes the context object (i.e., value returned from React. createContext ) as the one argument it accepts. And returns the current context value as given by the nearest context provider.
    </p>
    <Link to="usecontextchangetheme">Our Example</Link>
    <Context.Provider value ={{ Data:"Something" }}>
      <Child />
    </Context.Provider>
    {/* <Outlet></Outlet> */}
    </>     
  );
};

export default UseContextCustomHook;



// import React, { createContext, useState } from 'react';
// import ChildCompoForUseContect from './06ChildCompoForUseContect.jsx';

// const UseContextCustomHook = () => {
//     const [user,setUser] = useState("Default val")
//     return (
//         <>
//             <h1>{`Hello ${user}!`}</h1>
//             <ChildCompoForUseContect userData= {user}/>
//         </>
//     );
// };

// export default UseContextCustomHook;

// import React, { createContext, useState } from 'react';
// import ChildCompoForUseContect from './06ChildCompoForUseContect.jsx';

// const Context  = createContext()

// const UseContextCustomHook = () => {
//     const [user,setUser] = useState("Default val")
//     return (
//         <>
//             <Context.Provider value={{ data: "Data from context!" }}>
//                <ChildCompoForUseContect />
//             </Context.Provider>
//         </>
//     );
// };

// export default UseContextCustomHook;



// function Component1() {
//     const [user, setUser] = useState("Jesse Hall");
  
//     return (
//       <>
//         <h1>{`Hello ${user}!`}</h1>
//         <Component2 user={user} />
//       </>
//     );
//   }
  
//   function Component2({ user }) {
//     return (
//       <>
//         <h1>Component 2</h1>
//         <Component3 user={user} />
//       </>
//     );
//   }
  
//   function Component3({ user }) {
//     return (
//       <>
//         <h1>Component 3</h1>
//         <Component4 user={user} />
//       </>
//     );
//   }
  
//   function Component4({ user }) {
//     return (
//       <>
//         <h1>Component 4</h1>
//         <Component5 user={user} />
//       </>
//     );
//   }
  
//   function Component5({ user }) {
//     return (
//       <>
//         <h1>Component 5</h1>
//         <h2>{`Hello ${user} again!`}</h2>
//       </>
//     );
//   }
  











































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



// import React, { createContext, useState } from 'react';
// import ChildCompoForUseContect from "./06ChildCompoForUseContect.jsx";

// const Context = createContext() 

// const UseContextCosutomHook = () => {
//     const [user,SetUser] = useState("/je nakho ae show thay")
//     return (
//         <>
//         <Context.Provider value={    "Data From context"}>
//             <ChildCompoForUseContect />
//         </Context.Provider>
//         </> 
//     );
// };

// export default UseContextCosutomHook;