import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const heroFluid = data.heroImage.childImageSharp.fluid
  const pageContent = data.pageContent.frontmatter
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />
      <Hero heroFluid={heroFluid} fullHeight>
        <h1 className="title is-2 has-text-light">{pageContent.hero.title}</h1>
        <h2 className="subtitle is-3 has-text-light">{pageContent.hero.subtitle}</h2>
      </Hero>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12">
              <h1 className="title">Who the fuck is this guy?</h1>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-image">
                  <Img fluid={{...heroFluid, aspectRatio:1}}/>
                </div>
                <div className="card-content">
                  <p className="title is-4">A Developer</p>
                  <div className="content">
                    Stuff goes here?
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-image">
                  <Img fluid={{...heroFluid, aspectRatio:1}}/>
                </div>
                <div className="card-content">
                  <p className="title is-4">A Collaborator</p>
                  <div className="content">
                    Stuff goes here?
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-image">
                  <Img fluid={{...heroFluid, aspectRatio:1}}/>
                </div>
                <div className="card-content">
                  <p className="title is-4">A Technology Strategist</p>
                  <div className="content">
                    Stuff goes here?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    pageContent: markdownRemark(fields: {slug:{eq:"/"}}) {
      frontmatter {
        date
        description
        title
        hero {
          title
          subtitle
        }
      }
    }
  }
`
