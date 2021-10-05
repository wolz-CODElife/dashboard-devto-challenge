import React, { useState } from 'react'
import { GgMenuRightAlt } from './icons/Icons'
import './App.css'

const App = () => {
  const [nav, setNav] = useState(false)
  return (
    <>
      <div className={nav ? 'mobilePopup showPopup' : 'mobilePopup'}>
          <div className="nav">
            <a href="/" >Products</a>
            <a href="/" >About</a>
            <a href="/" >Resources</a>
            <a href="/" >Contact</a>
            <button>Dashboard</button>
          </div>
      </div>
      <div className="app">
        <div className="main">
          <div className="nav">
            <h2 className="title">UNX</h2>
            <div className="links">
              <a href="/" >Products</a>
              <a href="/" >About</a>
              <a href="/" >Resources</a>
              <a href="/" >Contact</a>
            </div>
            <button>Dashboard</button>
          </div>
          <div className="mobileNav">
            <h2 className="title">UNX</h2>
            <button onClick={() => setNav(!nav)}><GgMenuRightAlt /></button>
          </div>
        </div>
        <div className="blue_ball"></div>
        <div className="body">
          <h1 className="title1">The Best Way to</h1>
          <h1 className="title2">Track your Daily Progress</h1>
          <p className='paragraph'>UNX allows you to track all your daily task progress using gamification methods and earn rewards for specific coupons</p>
          <div className="button">
            <button>Try this app</button>
          </div>
          <img src="https://i.postimg.cc/T1Dt1d8y/image.png" alt="Dashboard" />
        </div>
      </div>
    </>
  )

}

export default App
