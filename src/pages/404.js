import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const heroFluid = data.heroImage.childImageSharp.fluid

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404" />
      <Hero heroFluid={heroFluid} fullHeight>
        <h1 className="title has-text-light">Not Found</h1>
        <h2 className="subtitle has-text-light">You just hit a route that doesn&#39;t exist...the sadness.</h2>
      </Hero>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    heroImage: file(relativePath: { eq: "mp_hero_2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4032) {
          ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  }
`
