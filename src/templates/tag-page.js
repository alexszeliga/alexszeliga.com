import React from "react"
import { graphql } from "gatsby"
import BlogCard from "../components/blogCard"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"

const TagPageTemplate = ({ data, pageContext, location }) => {
  const totalCount = data.allMarkdownRemark.totalCount
  const siteTitle = data.site.siteMetadata.title
  const blogPosts = data.allMarkdownRemark.edges
  const heroFluid = data.heroImage.childImageSharp.fluid


  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={pageContext.tag} description={"description"} />
      <Hero heroFluid={heroFluid}>
      <h1 className="title is-2 has-text-light">
            {pageContext.tag}
          </h1>
          <h2 className="subtitle is-4 has-text-light">
            Posts: {totalCount}
          </h2>
      </Hero>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              {blogPosts.map((post, i) => {
                return <BlogCard key={post.node.fields.slug} post={post} />

              })}
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
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
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

export default TagPageTemplate