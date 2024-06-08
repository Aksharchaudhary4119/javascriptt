import React from 'react';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import { createRoot } from 'react-dom/client';
import router from './router.jsx';
import { RouterProvider } from "react-router-dom";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<></>);
// root.render("testing checking");
// // root.render(<p>testing</p> <P>something</P>) Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?


// root.render(
// <div>
//   <p>testing</p> <p>something</p>
// </div>

// );


// root.render( <><p>testing</p> <p>something</p></>);
// // root.render( <div><p>testing</p> <p>something</p><div/>);
// root.render( <>
// <a href="/">Home</a>
// <a href="about">About</a>
// <a href="contact">Contact</a>
// </>)

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
