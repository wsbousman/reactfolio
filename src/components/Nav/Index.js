import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <header>
        <nav class="nav">
            <Link to="/">About</Link>
            <Link to="/Project">Portfolio</Link>
            <a href="https://docs.google.com/document/d/1dGjE_g2sGJewweLGlLAwPHzWmI0aiyK-KpN28R_2i9I/edit?usp=sharing">Resume</a>
        </nav>
    </header>
  );
}

export default Nav;