import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const heroFluid = data.heroImage.childImageSharp.fluid
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />
      <Hero heroFluid={heroFluid}>
        <h1 className="title has-text-light">Alex Szeliga</h1>
        <h2 className="subtitle has-text-light">Web Developer and Technology Strategist</h2>
      </Hero>
    </Layout>
  )
}

export default BlogIndex

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
