import React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"


// import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero"
import BlogCard from "../../components/blogCard"
// import { rhythm } from "../../utils/typography"

const BlogIndexPage = ({ data, location }) => {
  const posts = data.blogPostMarkdown.edges
  // const featuredPost = featuredPost ? featuredPost : posts.shift()
  const siteTitle = data.site.siteMetadata.title
  const heroFluid = data.heroImage.childImageSharp.fluid
  const blogTags = data.blogPostMarkdown.tags
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio Page" />
      <Hero heroFluid={heroFluid}>
        <h1 className="title has-text-light">My Blog</h1>
        <h2 className="subtitle has-text-light">
          The sometimes coherent ramblings of a developer and technologist
        </h2>
      </Hero>
      <section className="section" id="featured-blog-post">
        <div className="container">
          <div className="columns">
            <div className="column">
              <BlogCard key={posts[0].node.fields.slug} post={posts[0]} />
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="blog-index">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <ul>
              {blogTags.map(tag => {
                return <li key={_.kebabCase(tag.fieldValue)}><Link to={`/blog/tag/${_.kebabCase(tag.fieldValue)}`}>{tag.fieldValue}: <span>{tag.totalCount}</span></Link></li>
              })}
              </ul>
            </div>
            <div className="column is-9">
              {posts.map((post, i)=>{
                if (i !== 0) {
                  return <BlogCard key={post.node.fields.slug} post={post} />
                }
              })}
            </div>
          </div>
        </div>
      </section>
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
    blogPostMarkdown: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "^/blog/" } } }
    ) {
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
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
