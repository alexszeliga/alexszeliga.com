import React from "react"
import { Link } from "gatsby"

import BasicContactForm from "../components/BasicContactForm"

const Footer = () => {
  return (
    <footer className="has-background-grey-lighter py-5">
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <aside className="menu">
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
            </aside>
          </div>
          <div className="column is-3">
            <aside className="menu">
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
                    href="https://www.linkedin.com/in/alex-szeliga-1ab93423"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </aside>
          </div>
          <div className="column is-6">
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
