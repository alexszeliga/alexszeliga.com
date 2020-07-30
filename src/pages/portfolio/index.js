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
      <SEO title="Portfolio Page" description={'A list of some of the recent projects worked on by Alex Szeliga, a web developer.'}/>
      <Hero heroFluid={heroFluid}>
        <h1 className="title is-2 has-text-light">Portfolio</h1>
        <h2 className="subtitle is-3 has-text-light">Standing on the shoulders of giants, surrounded by giants.</h2>
      </Hero>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {projects.map(({ node },i) => {
              const portImageFluid = node.frontmatter.image.childImageSharp.fluid
              const projectTitle = node.frontmatter.title
              const projectDescription = node.frontmatter.description
              const projectUrls = node.frontmatter.projectUrls || []
              return (
                <div key={i} className="column is-half mb-6">
                  <h1 className="title is-4">{projectTitle}</h1>
                  <p className="has-text-weight-light mb-4">{projectDescription}</p>
                  <Img 
                    fluid={{...portImageFluid, aspectRatio: 1.5825}}
                  />
                  <div className="buttons mt-4">
                    {
                      projectUrls.map(({linkUrl, linkLabel, isInternalLink},i) => {
                        const target = isInternalLink ? `` : `_blank`
                        const rel = isInternalLink ? `` : `noopener noreferrer`
                        return (
                        <a className="button" key={i} href={linkUrl} target={target} rel={rel}>{linkLabel}</a>
                        )
                      })
                    }
                  </div>
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
            projectUrls {
              linkLabel
              linkUrl
              isInternalLink
            }
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
