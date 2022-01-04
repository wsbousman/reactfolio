import React from 'react'
import { Link } from "react-router-dom";

function header() {

  return (
    <section>
        <Link className="h1" to="/">Will Bousman</Link>
        <p className="head" >syntactic sugar specialist</p>
    </section>
  )
}

export default header