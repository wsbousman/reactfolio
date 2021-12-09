import React from 'react'
import genny from "../../Assets/genny.png";
import thotimus from "../../Assets/thotimus.png";
import timerex from "../../Assets/timerex.png";
import reactfolio from "../../Assets/reactfolio.png";

function project() {

  return (
    <section>
      <div className="wrap">
        <a href="https://github.com/wsbousman/Genny"><img src={genny} alt="random password generator" /></a>
      </div>
        <p className="port">Genny is a JavaScript random password generator with a variety of optional character sets.</p>
    
      <div className="wrap">
        <a href="https://github.com/wsbousman/GetTimer"><img src={timerex} alt="a timer built without setInterval or setTimeout methods" /></a>
      </div>
        <p className="port">getTimer is a Javascript timer built without using setInterval or setTimeout methods, just for fun.</p>
      <div className="wrap">
        <a href="https://github.com/wsbousman/Thotimus-Prime"><img src={thotimus} alt="a social media back end built using MongoDB" /></a>
      </div>
        <p className="port">Thotimus Prime is a MongoDB database designed to support a thought-sharing social media app.</p>
      <div className="wrap">
        <a href="https://github.com/wsbousman/reactfolio"><img src={reactfolio} alt="a React portfolio" /></a>
      </div>
        <p className="port">And I built the site you're currently viewing using React.</p>
      <p className="port2">A much greater variety of my work, including group projects I contributed to, can be found at my GitHub.</p>
    </section>
  )
}

export default project
