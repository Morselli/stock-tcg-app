import React from "react"
import './styles.css'

export default function Home() {
  return (
    <>
      <div className="first section">
        <div className="home-header">
          <div className="home-header-title">
            <h1>StockTCG</h1>
          </div>
          <nav className="home-header-nav">
            <ul>
              <li>About Us</li>
              <li>Features</li>
              <li>Contact</li>
            </ul>
            <div className="home-header-login">
              <button>Login</button>
            </div>
          </nav>
        </div>
        <a href="#second">Go to second section</a>
      </div>
      <div className="second section" id="second">

      </div>
      <div className="third section">

      </div>
      <div className="fourth section">

      </div>
    </>
  )
}