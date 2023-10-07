import React from 'react'
import { Link } from 'react-router-dom' // Import Link from React Router

import './navbar.css'

const Navbar = () => {
  return (
    <section id="landing-page">
      <nav>
        <div className="logo">
          <img
            src="https://html.cwsthemes.com/aconte/assets/images/retina-logo.png"
            alt="Logo"
          />
        </div>
        <ul>
          {/* Use Link components for navigation */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </nav>

      <div className="landing-page">
        <div className="landing-heading">
          <h1>Our Events</h1>
        </div>
        <div className="landing-line">
          <span></span>
        </div>

        <div className="landing-navbar">
          <Link to="/">Home</Link>
          <Link to="/events">Our Events</Link>
        </div>
      </div>
    </section>
  )
}

export default Navbar
