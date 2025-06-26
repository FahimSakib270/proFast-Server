import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router";

const ProFastLogo = () => {
  return (
    <Link to="/">
      <div className="flex items-end">
        <img className="mb-2.5" src={logo} alt="" />
        <p className="text-3xl font-bold -ml-2">Profast</p>
      </div>
    </Link>
  );
};

export default ProFastLogo;
