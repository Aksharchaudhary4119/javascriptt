import { createBrowserRouter, useRoutes } from "react-router-dom";
import FunctionalCompoMenu from "./01FunctionalCompoMenu.jsx"
import FunctionalCompoIntro from "./02FunctionalCompoIntro.jsx"
import FunctionalCompoState from "./03FunctionalCompoState.jsx"
import FunctionalCompoProps from "./04FunctionalCompoProps.jsx"
import FunctionalCompoUseContext from "./05UseContext.jsx"
import ThemeChange from "./UseContextHooks/ThemeChangeDarkLight/01mainFile.jsx"


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
        },{
          path: "functionalComponentUseContext",
          element: <FunctionalCompoUseContext />,
        },{
          path: "functionalcomponentusecontext/usecontextchangetheme",
          element: <ThemeChange />,
      }
        ],
    },
  ])
  return routes;
};

export default FunctionalComponentRoute;



// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={user} />
//     </>
//   );
// }

// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// function Component3({ user }) {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 user={user} />
//     </>
//   );
// }

// function Component4({ user }) {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 user={user} />
//     </>
//   );
// }

// function Component5({ user }) {
//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }
