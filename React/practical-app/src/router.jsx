import { createBrowserRouter } from "react-router-dom";
import HeaderCom from "./Component/HeaderFile";
import TutorialCompo from "./Pages/TutorialComponent.jsx";
import ExampleCompo from "./Pages/ExampleCompo.jsx";
import { Suspense, lazy } from "react";
// import ClassCompoRoute from "./Example/Classcomponents/classrouter.jsx";
const ClassCompo = lazy(() => {return import("./Example/Classcomponents/classrouter.jsx")});
const FunctionalCompo = lazy(() => {return import("./Example/Functionalcomponents/functionalrouter.jsx")});

const router = createBrowserRouter([
  { 
    path: "/home",
    element: (
      <div>
        <HeaderCom />
        <h1>Hello World</h1>
      </div>
    ),
  },
  {
    path: "/about",

    element: (
      <div>
        <HeaderCom /> <h2> About</h2>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <HeaderCom />
        <div>
          <h2>Contact us</h2>
        </div>
      </>
    ),
  },
  {
    path: "/examples",
    element: <ExampleCompo />,
    children: [
      {
        path: "/examples/classcomponent/*",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <ClassCompo />
          </Suspense>
        ),
      },
      {
        path: "/examples/functionalcomponent/*",
        element: <Suspense fallback={<>Loading...</>} ><FunctionalCompo /></Suspense>,
    },
    ],
  },
]);

export default router;



