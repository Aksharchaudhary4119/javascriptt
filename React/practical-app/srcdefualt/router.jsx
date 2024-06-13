import { createBrowserRouter, Link } from "react-router-dom";
import {} from "./Header.jsx";
import HeaderCom from "./Header.jsx";

const router = createBrowserRouter([
  {
    Path: "/",
    element: (
      <div>
        <HeaderCom />
        <h1>Hello World</h1>
      </div>
    ),
  },
  {
    path: "about",

    element: (
      <div>
        <HeaderCom /> <h2> About</h2>
      </div>
    ),
  },
  {
    path: "contact",
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
