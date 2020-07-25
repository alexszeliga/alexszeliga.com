import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import RelatedPosts from "../components/relatedPosts"

import _ from "lodash"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const heroFluid = data.heroImage.childImageSharp.fluid
  const relatedPosts = _.uniqBy(data.relatedPosts.nodes, "id").filter((post)=>{
    return post.id !== pageContext.id
  }) || []
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      {console.log(pageContext.id)}
      <Hero heroFluid={heroFluid}>
        <h1 className="title is-2 has-text-light">
          {post.frontmatter.title}
        </h1>
        <h2 className="subtitle is-3 has-text-light">
          {post.frontmatter.date}
        </h2>
      </Hero>
      <article className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <div className="column is-4">
              <RelatedPosts posts={relatedPosts} />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $tags: [String]) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 250)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    heroImage: file(relativePath: { eq: "mp_hero_2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4032) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    relatedPosts: allMarkdownRemark(filter: {frontmatter: {tags: {in: $tags}}}) {
      nodes {
        fields {
          slug
        }
        id
        excerpt (pruneLength: 200)
        frontmatter {
          title
        }
      }
    }
  }
`
