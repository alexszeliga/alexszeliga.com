import React from "react"

import Navbar from "./Navbar"
import Footer from "./footer"
import "./styles.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="has-navbar-fixed-top">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
