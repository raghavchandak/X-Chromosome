import React from "react";
import "./Navigation.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "../../Screens/Home/index";
import About from "../../Screens/About/index";
import QA from "../../Screens/QA/index";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-tabs">
        <Link to="/" className="tabs">
          Home
        </Link>
        <Link to="about" className="tabs">
          About
        </Link>
        <Link to="qa" className="tabs">
          Q/A
        </Link>
        <p className="tabs">Random</p>
        <p className="tabs">Dunno</p>
      </div>
    </div>
  );
};

export default Navigation;
