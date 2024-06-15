import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class ClassCompoMenu extends Component {
  render() {
    return (
      <>
        <ol>
          <li>
            <Link to="classcompointro">Introduction</Link>
          </li>
        </ol>
        <div className="row my-3">
          <div className="col">
            <Outlet />
          </div>
        </div>
      </>
    );
  }
}

export default ClassCompoMenu;
