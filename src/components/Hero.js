import React from "react"
import BackgroundImage from "gatsby-background-image"
const Hero = ({ children, heroFluid, fullHeight }) => {
  return (
    <BackgroundImage fluid={heroFluid} >
      <div className={ fullHeight ? "hero is-fullheight" : "hero"}>
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