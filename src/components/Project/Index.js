import React from 'react'
import genny from "../../Assets/gennyPNG.png";
import thotimus from "../../Assets/thotimusPNG.png";
import timerex from "../../Assets/timerexPNG.png";
import reactfolio from "../../Assets/reactfolioPNG.png";
import htmlport from "../../Assets/htmlportPNG.png";

function project() {

  return (
    <section>
      <p className="port2">The code snippets featured here are transparent-background PNGs and are links to each project's GitHub repository.</p>
      <div className="wrap">
        <a href="https://github.com/wsbousman/reactfolio"><img src={reactfolio} alt="a React portfolio" /></a>
      </div>
        <p className="port">I built the site you're currently viewing using React. It uses both conditional component rendering and declarative routing.</p>
      <div className="wrap">
        <a href="https://github.com/wsbousman/Genny"><img src={genny} alt="random password generator" /></a>
      </div>
        <p className="port">Genny is a JavaScript password generator that randomly iterates over a variety of optional arrays of Unicode character codes.</p>
      <div className="wrap">
        <a href="https://github.com/wsbousman/GetTimer"><img src={timerex} alt="a timer built without setInterval or setTimeout methods" /></a>
      </div>
        <p className="port">getTimer is a JavaScript timer built without using setInterval or setTimeout methods, just for fun.</p>
      <div className="wrap">
        <a href="https://github.com/wsbousman/Thotimus-Prime"><img src={thotimus} alt="a social media back end built using MongoDB" /></a>
      </div>
        <p className="port">Thotimus Prime is a MongoDB database designed to support a thought-sharing social media app.</p>
      <div className="wrap">
        <a href="https://wsbousman.github.io/Port/"><img src={htmlport} alt="an HTML version of this portfolio" /></a>
      </div>
        <p className="port">I also have an HTML/CSS-only, mobile-friendly version of this portfolio.</p>
      <p className="port2">A much greater variety of my work, including group projects I contributed to, can be found at my GitHub.</p>
    </section>
  )
}

export default project