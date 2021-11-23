import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <header>
        <nav class="nav">
            <Link to="/">About</Link>
            <Link to="/Project">Portfolio</Link>
            <Link to="/Contact">Contact</Link>
            {/*<Link to="/Resume">Resume</Link>*/}
        </nav>
    </header>
  );
}

export default Nav;