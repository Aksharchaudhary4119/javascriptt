import React from 'react';
// import ReactDOM from 'react-dom/client';
// import CustomCompo from './Component/myCompo.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import HomePage from './HomePage.jsx';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<HomePage/>);
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

// const HedaerMenu = () => {
//     return 
//     <a href="/">Home</a>
//     <a href="/about">About</a>
//     <a href="/contact">Contact</a>
//
// }
const HedaerMenu = () => {
    return <>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </>
}

const router = createBrowserRouter([{
    path: '/',
    element: <>

        <HedaerMenu />
        <h3>Welcome to my home page</h3>

    </>
}, {
    path: '/about',
    element: <>

        <HedaerMenu />
        <h3>This is About us page</h3>

    </>
}, {
    path: '/contact',
    element: <>

        <HedaerMenu />
        <h3>Contact us page data will be here</h3>

    </>
}])

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);