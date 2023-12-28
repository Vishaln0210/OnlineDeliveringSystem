import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero_image.png'



export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
<h2>NEW ARRVALS ONLY</h2>
<div>
    <div className="hand-hand-icon">
        <p>new</p>
    
    </div>
    <p>collections</p>
    <p>for everyone</p>
</div>
<div className="hero-latest-btn">
    <div>Latest Collection</div>

</div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt=""/>

        </div>
    </div>

  )
}
