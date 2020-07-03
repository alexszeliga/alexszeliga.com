import React from "react"
import BackgroundImage from "gatsby-background-image"
const Hero = ({ children, heroFluid }) => {
  return (
    <BackgroundImage fluid={heroFluid} >
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            {children}
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}
export default Hero