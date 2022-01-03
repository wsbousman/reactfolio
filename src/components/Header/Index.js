import React from 'react'
import Nav from '../Nav';
import { Link } from "react-router-dom";

function header() {

  return (
    <section>
        <Link className="h1" to="/">Will Bousman</Link>
        <p className="head" >language-agnostic deadlock extraordinaire</p>
        <Nav></Nav>
    </section>
  )
}

export default header
