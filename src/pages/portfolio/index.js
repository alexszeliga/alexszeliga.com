import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero"
const PortfolioPage = ({ data, location }) => {
  const title = data.site.siteMetadata.title
  const projects = data.allMarkdownRemark.edges
  const heroFluid = data.heroImage.childImageSharp.fluid
  return (
    <Layout location={location} title={title}>
      <SEO title="Portfolio Page" />
      <Hero heroFluid={heroFluid}>
        <h1 className="title has-text-light">Portfolio</h1>
        <h2 className="subtitle has-text-light">Standing on the shoulders of giants, surrounded by giants.</h2>
      </Hero>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {projects.map(({ node }) => {
              const portImageFluid = node.frontmatter.image.childImageSharp.fluid
              const projectTitle = node.frontmatter.title
              const projectDescription = node.frontmatter.description
              const projectUrl = node.frontmatter.projectUrl
              const id = node.id
              return (
                <div key={id} className="column is-half">
                  <p>{projectTitle}</p>
                  <p>{projectDescription}</p>
                  <a href={projectUrl} target="_blank" rel="noreferrer">
                    <Img
                      fluid={portImageFluid}
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PortfolioPage

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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "^/portfolio/" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            projectUrl
            image {
              childImageSharp {
                fluid(quality:100, maxWidth:640) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
