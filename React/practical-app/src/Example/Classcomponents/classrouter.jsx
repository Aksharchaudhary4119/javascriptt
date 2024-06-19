import { createBrowserRouter, useRoutes } from "react-router-dom";
import ClassCompoMenu from "./ClassCompoMenu.jsx"
import ComponentInReact from "./ComponentInReact.jsx"
import ReactClassState from "./ReactClassState.jsx"
import ReactClassProps from "./ReactClassProps.jsx"
import ReactClassConstructor from "./ReactClassConstructor.jsx"
import ReactClassLifeCycle from "./ReactClassLifeCycle.jsx"
// const classrouter = createBrowserRouter([
//     {
//         path: "classcomponent",
//         element: (
//             <div>
//                 <h2>Welcome to Class Component</h2>
//                 {/* <Link to="about">About Us</Link> */}
//             </div>
//         ),
//     }
// ]);


const ClassComponentRoute = () => {
    // http://localhost:3000/examples/classcomponent/classcompointro
    const routes = useRoutes([
        {
            path: "/",
            element: <ClassCompoMenu />,
            children: [{
                    path: "classcompointro",
                    element: <ComponentInReact />,
                }, {
                    path: "classcompostate",
                    element: <ReactClassState />,
                }, {
                    path: "classcompoprops",
                    element: <ReactClassProps />,
                }, {
                    path: "classcompoconstructor",
                    element: <ReactClassConstructor />,
                }, {
                    path: "classcompolifecycle",
                    element: <ReactClassLifeCycle />,
                }
            ]
        }])
    return routes;
}



export default ClassComponentRoute;