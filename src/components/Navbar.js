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
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Home
          </a>
          <a
            role="button"
            className={`navbar-burger burger ${this.state.navBarClass}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => {this.toggleHamburber()}}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${this.state.navBarClass}`} id="main-nav">
          <div className="navbar-start">
            <Link className="navbar-item" to="/portfolio">Portfolio</Link>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://github.com/alexszeliga/" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
