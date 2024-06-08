import { createBrowserRouter, Link } from "react-router-dom";
// import {} from "./HeaderCom.jsx";
import HeaderCom from "./HeaderCom.jsx";

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
]);

export default router;
