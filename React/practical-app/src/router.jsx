import { createBrowserRouter } from "react-router-dom";
import HeaderCom from "./Component/HeaderFile";
import TutorialCompo from "./Pages/TutorialComponent.jsx";
import ExampleCompo from "./Pages/ExampleCompo.jsx";
import { Suspense, lazy } from "react";
// import ClassCompoRoute from "./Example/Classcomponents/classrouter.jsx";
const ClassCompo = lazy(() => {
  return import("./Example/Classcomponents/classrouter.jsx");
});

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
    // element:
    //   <>
    //     <HeaderCom />
    //     <div>
    //       <h2>data</h2>
    //       <Outlet />
    //     </div>
    //   </>
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
        path: "functionalCompo",
        element: <TutorialCompo />,
      },
    ],
  },
]);

export default router;
