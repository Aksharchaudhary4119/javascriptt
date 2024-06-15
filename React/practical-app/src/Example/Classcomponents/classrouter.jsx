import { Link, createBrowserRouter, useRoutes } from "react-router-dom";
import ClassCompoMenu from "./ClassCompoMenu.jsx";
import ComponentInReact from "./ComponentInReact.jsx";

// const classrouter = createBrowserRouter([
//   {
//     path: "/classcomponent",
//     element: (
//       <div>
//         <h2>Welcome to Class Component</h2>

//       </div>
//     ),
//   },
// ]);

const ClassComponentRoute = () => {
  const routes = useRoutes([
    {
      path: "/*",
      element: <ClassCompoMenu />,
      children: [
        {
          path: "classcompointro",
          element: <ComponentInReact />,
        },
      ],
    },
  ]);
  return routes;
};

export default ClassComponentRoute;
