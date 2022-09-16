import React from "react";

// Stateless Functional Component

const NavBar = ({ type }) => {
  const { innerWidth: width, innerHeight: height } = window;
  const rw = true;
  return (
       <nav className="qnavbar navbar-light my-navbar txt-white-color bcg-black-color row center" id={type == "over" ? "hde" : "shw"}>
        <div className="navbar-brand c4t mini">
          <a href="/">
              
          <img src="C4TW.png"  />
          </a>
        </div>
        <div className={"navbar-body " + (rw ? "row" : "col")}>
          <li>  
            <a href="/program">program</a>
          </li>
          <li>
            <a href="/articles">articole</a>
          </li>
          <li>
            <a href="#program">interviuri</a>
          </li>
          <li>
            <a href="#program">exploreaza</a>
          </li>
          <li>
            <a href="#program">galerie</a>
          </li>
          <li>
            <a href="#program">arhiva</a>
          </li>
          <li>
            <a href="/contact">contactati-ne</a>
          </li>
          

        </div>
      </nav>
      
   
  );
};

export default NavBar;
