import React from "react"
import { Link } from "gatsby"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarClass: "",
    }
  }
  toggleHamburber = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        this.state.active
          ? this.setState({ navBarClass: "is-active" })
          : this.setState({ navBarClass: "" })
      }
    )
  }
  render() {
    return (
      <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              Home
            </a>
            <button
              className={`navbar-burger burger ${this.state.navBarClass}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => {
                this.toggleHamburber()
              }}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div
            className={`navbar-menu ${this.state.navBarClass}`}
            id="main-nav"
          >
            <div className="navbar-start">
              <Link className="navbar-item" to="/portfolio">
                Portfolio
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/alexszeliga/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
