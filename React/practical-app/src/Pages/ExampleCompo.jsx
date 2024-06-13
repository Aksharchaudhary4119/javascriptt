import React from "react";
import HeaderCom from "./../Component/HeaderFile";
import { Outlet } from "react-router-dom";

const ExampleCompo = () => {
  return (
    <>
      <HeaderCom />
      <div className="Conatiner">
        <div className="row my-3">
          <div className="col">
            <p className="text-center">Welcome to my Tutorials</p>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default ExampleCompo;
