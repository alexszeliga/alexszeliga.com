import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        Home
      </a>
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div className="navbar-menu" id="main-nav">
      <div className="navbar-start">
        <Link to="/portfolio">Portfolio</Link>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://github.com/alexszeliga/">
          GitHub
        </a>
      </div>
    </div>
  </nav>
)

export default Header
