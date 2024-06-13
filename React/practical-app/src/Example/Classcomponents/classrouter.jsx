import { createBrowserRouter } from "react-router-dom";

const classrouter = createBrowserRouter([
  {
    path: "/classcomponent",
    element: (
      <div>
        <h2>Welcome to Class Component</h2>
      </div>
    ),
  },
]);

export default classrouter;
