import { createBrowserRouter, useRoutes } from "react-router-dom";
import FunctionalCompoMenu from "./01FunctionalCompoMenu.jsx"
import FunctionalCompoIntro from "./02FunctionalCompoIntro.jsx"
import FunctionalCompoState from "./03FunctionalCompoState.jsx"
import FunctionalCompoProps from "./04FunctionalCompoProps.jsx"


const FunctionalComponentRoute = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <FunctionalCompoMenu />,
      children: [
        {
          path: "functionalComponentintro",
          element: <FunctionalCompoIntro />,
        },{
          path: "functionalComponentstate",
          element: <FunctionalCompoState />,
        },{
          path: "functionalComponentprops",
          element: <FunctionalCompoProps />,
        }
      ],
    },
  ])
  return routes;
};

export default FunctionalComponentRoute;
