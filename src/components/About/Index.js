import React from 'react'
import shot from "../../Assets/shot.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About</h1>
      <img src={shot} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Will Bousman is a web developer living in Austin, Texas offering world-class technology services incorporating industry insights and adaptive acumen to leverage a strong foundation in engaging design principles, delivering dynamic solutions, fulfilling digital visions, and providing continuums of object-oriented scalable workforce service mobilization and reactive enterprise opportunities to digital innovation driving improved results streamlining actionable data into ideal versatile architechtural process management while simultaneously adventing mobile first value to disruptive strategic consulting business intelligence and online/database marketing technology that transforms clients through modern asynchronous machine learning tailored to emerging industries. Also he rides motorcycles.
        </p>
      </div>
    </section>
  )
}

export default About
