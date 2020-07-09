import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TagPageTemplate = ({ data, pageContext, location }) => {
    const totalCount = data.allMarkdownRemark.totalCount
    const tag = "code"
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
          <SEO title={pageContext.tag} description={"description"}/>
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <h1 class="title">Blog posts on: {pageContext.tag}</h1>
                </div>
              </div>
            </div>
          </section>
        </Layout>
    )
}

export const pageQuery = graphql`
query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default TagPageTemplate