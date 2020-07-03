import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="">
      <div className="container ">
        <div className="columns">
          <div className="column is-one-third-desktop">
            <aside className="menu">
              <p className="menu-label">SITE</p>
              <ul className="menu-list ">
                <li >
                  <Link className="has-text-light" to="/">Home</Link>
                </li>
                <li>
                  <Link className="has-text-light" to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link className="has-text-light" to="/blog">Blog</Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>

        <p>© {new Date().getFullYear()} Alex Szeliga</p>
      </div>
    </footer>
  )
}

export default Footer
