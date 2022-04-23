import React from "react"
import barcelona from "./assets/barcelona.jpeg"
import moscow from "./assets/moscow.jpeg"
import newyork from "./assets/newyork.jpeg"
import paris from "./assets/paris.jpeg"
import "./styles/Second.scss"

const Second = () => {
  return (
    <section className='second'>
      <h1>Gallery</h1>
      <div className='images'>
        <div>
          <img src={paris} alt='paris' />
          <p>Paris, France 2011</p>
        </div>
        <div>
          <img src={barcelona} alt='paris' />
          <p>Barcelona, Spain 2019</p>
        </div>
        <div>
          <img src={moscow} alt='paris' />
          <p>Moscow, Russia 2017</p>
        </div>
        <div>
          <img src={newyork} alt='paris' className='new-york' />
          <p>NYC, USA 2020</p>
        </div>
      </div>
    </section>
  )
}

export default Second
