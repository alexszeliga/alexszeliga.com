import React from "react"
import { graphql } from "gatsby"

// import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
// import { rhythm } from "../../utils/typography"

const PortfolioPage = ({ data, location }) => {
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title="TITLE">
      <SEO title="Portfolio Page" />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {projects.map(({ node }) => {
              const title = node.frontmatter.title
              const html = node.html
              return (
                <div className="column is-half">
                  <p>{title}</p>
                  <div dangerouslySetInnerHTML={{ __html: html }}></div>
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          html
        }
      }
    }
  }
`
