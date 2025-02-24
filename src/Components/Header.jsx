import "../Styles/Header.css";
import React from 'react';

function Header() {
  const name = "Christopher J. Purser";
  const credentials = [
    "Innovative Software Developer",
    "Problem Solver",
    "Network & Infrastructure Enthusiast",
    "Continuous Learner",
  ];
  const jobTitle = "Web Developer";

  return (
    <header>
      <div className="slogan">
        <h3>{name}</h3>
        <p>{jobTitle}</p>
      </div>
      <img src="/chris-p.jpg" alt="myLogoHere" className="logo" />
      <div className="burgerIcon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
