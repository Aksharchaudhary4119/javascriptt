import React from "react";
import HeaderCom from "./../Component/HeaderFile";
import { Link, Outlet } from "react-router-dom";
const ExampleCompo = () => {
  return (
    <>
      <HeaderCom />
      <div className="container">
        <div className="row my-3">
          <div className="col">
            <p className="text-center">Welcome to my Tutorials</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h3>
              <Link to="/examples/classcomponent">Class Component</Link>
            </h3>
          </div>
          <div className="col-6">
            <h3>
              <Link to="/examples/functionalcomponent">
                Functional Component
              </Link>
            </h3>
            {/* <h3>Functional Component</h3> */}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default ExampleCompo;
