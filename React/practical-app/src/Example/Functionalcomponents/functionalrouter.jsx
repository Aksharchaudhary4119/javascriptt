import { createBrowserRouter, useRoutes } from "react-router-dom";
import FunctionalCompoMenu from "./01FunctionalCompoMenu.jsx"
import FunctionalCompoIntro from "./02FunctionalCompoIntro.jsx"
import FunctionalCompoState from "./03FunctionalCompoState.jsx"
import FunctionalCompoProps from "./04FunctionalCompoProps.jsx"
import FunctionalCompoUseContext from "./05UseContext.jsx"
import ThemeChange from "./UseContextHooks/ThemeChangeDarkLight/01mainFile.jsx"
import FunctionalControlledCompo from "./08FunctionalControlledCompo.jsx"
import FunctionalUnControlledCompo from "./09FunctionalUnControlledCompo.jsx"
import FunctionalCompoUseRef from "./10UseRefEffectHooksInFunctionalCompo.jsx"
import FunctionalCompoRestSpread from "./11FunctionalCompoRestSpread.jsx"
import HooksTheory from "./12HooksInFunctionalCompo.jsx"
import UseEffectHook from "./13UseEffectHook.jsx"
import UseLayoutEffectHook from "./14UseLayoutEffectHook.jsx"
import UseCallBackHook from "./16UseCallbackHook.jsx"
import UseMemoHooks from "./17UseMemoHooks.jsx"  
import StateLifting from "./18StateLifting.jsx"



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
      },{
        path:"functionalcontrolledcompo",
        element:<FunctionalControlledCompo/>
      },{
        path:"functionaluncontrolledcompo",
        element:<FunctionalUnControlledCompo/>
      },{
        path: "functionalcomponentuseref",
        element: <FunctionalCompoUseRef />,
    },{
      path: "functionalcomponentresspread",
      element: <FunctionalCompoRestSpread />,
      },{
        path: "hooks",
        element: <HooksTheory />,
      },{
      path: "useeffect",
      element: <UseEffectHook />,
      },{
      path: "uselayouteffect",
      element: <UseLayoutEffectHook />,
    },{
      path:"usecallback",
      element:<UseCallBackHook />
    },{
      path:"usememohooks",
      element:<UseMemoHooks />
    },{
      path: "statelifting",
      element: <StateLifting />,
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
