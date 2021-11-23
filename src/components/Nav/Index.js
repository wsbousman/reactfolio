import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <header>
        <nav class="nav">
            <Link to="/">About</Link>
            <Link to="/Project">Portfolio</Link>
            <Link to="/Contact">Contact</Link>
            <a href="https://docs.google.com/document/d/e/2PACX-1vSowsgPrVXQK73tTIpiTiluEGLTF3jC4svEmgCnHfM-g8XVl_lmBdLVG22blKn3f7VMrkeOxyJBsZYx/pub">Resume</a>
        </nav>
    </header>
  );
}

export default Nav;