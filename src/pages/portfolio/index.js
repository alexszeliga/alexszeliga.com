import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

// import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
// import { rhythm } from "../../utils/typography"

const PortfolioPage = ({ data, location }) => {
  const title = data.site.siteMetadata.title
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={title}>
      <SEO title="Portfolio Page" />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {projects.map(({ node }) => {
              const portImageFluid = node.frontmatter.image.childImageSharp.fluid
              const projectTitle = node.frontmatter.title
              const projectDescription = node.frontmatter.description
              const projectUrl = node.frontmatter.projectUrl
              return (
                <div className="column is-half">
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "^/portfolio/" } } }
    ) {
      edges {
        node {
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
