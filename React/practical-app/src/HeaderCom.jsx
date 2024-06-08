import React from "react";
import { Link } from "react-router-dom";
const HeaderCom = () => {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Conatct</Link>
    </>
  );
};

export default HeaderCom;
