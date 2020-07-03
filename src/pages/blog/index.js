import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero"
// import { rhythm } from "../../utils/typography"

const BlogIndexPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  const siteTitle = data.site.siteMetadata.title
  const heroFluid = data.heroImage.childImageSharp.fluid
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio Page" />
      <Hero heroFluid={heroFluid}>
        <h1 className="title has-text-light">My Blog</h1>
        <h2 className="subtitle has-text-light">
          The sometimes coherent ramblings of a developer and technologist
        </h2>
      </Hero>
      <div className="container">
        <div className="columns">
          <div className="column">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <article key={node.fields.slug}>
                  <h3>
                    <Link to={node.fields.slug}>{title}</Link>
                  </h3>
                  <p>{node.frontmatter.date}</p>
                  <div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
