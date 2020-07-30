import React from "react"
import { Link } from "gatsby"

import BasicContactForm from "../components/BasicContactForm"

const Footer = () => {
  return (
    <footer className="footer has-background-grey-lighter">
      <div className="container">
        <div className="columns">
          <div className="column is-3">
              <p className="menu-label">SITE</p>
              <ul className="">
                <li>
                  <Link className="" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link className="" to="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
          </div>
          <div className="column is-3">
              <p className="menu-label">FIND ME</p>
              <ul className="">
                <li>
                  <a target="_blank" rel="noreferrer" href="https://github.com/alexszeliga">
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer" 
                    href="https://www.linkedin.com/in/alex-szeliga-he-him-1ab93423"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
          </div>
          <div className="column">
            <BasicContactForm />
          </div>
        </div>

        <p className="has-text-centered menu-label">
          © {new Date().getFullYear()} Alex Szeliga
        </p>
      </div>
    </footer>
  )
}

export default Footer
