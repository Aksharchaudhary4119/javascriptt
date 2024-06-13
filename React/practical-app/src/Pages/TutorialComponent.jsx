import React, { Component } from "react";
import { Link } from "react-router-dom";

const TutorialComponent = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3>
              <Link to="/examples/classComponent">Class Component</Link>
            </h3>
          </div>
          <div className="col-6">
            <h3>
              <Link to="/examples/functionalComponent">
                Functional Component
              </Link>
            </h3>
            {/* <h3>Functional Component</h3> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default TutorialComponent;
