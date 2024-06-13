import React from "react";
import { useState } from "react";

const StateExample = () => {
  let [anything, setStateany] = useState(0);
  var test = 50;
  function gemetefuncnunaam(params) {
    console.log("called");
    test = 100;
    // setStateany(52)
    setStateany(anything - 1);
  }
  function addition(params) {
    setStateany(anything + 1);
  }
  return (
    <>
      {/* <button>increment</button>
            <button>decrement</button> */}
      <div className="container my-5">
        <div className="row">
          <div className="col">
            {/* <button onClick={clickHandle(aa js ma chale ahi nahi)} className='btn btn-sm btn-danger'>-</button> {test} */}
            {/* <button onClick={clickHandle} className='btn btn-sm btn-danger'>-</button> {test} */}
            <button
              onClick={gemetefuncnunaam}
              className="btn btn-sm btn-danger"
            >
              -
            </button>{" "}
            test var = {test} , state = {anything}
            <button onClick={addition} className="btn btn-sm btn-success">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StateExample;
