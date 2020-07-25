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
  const techStratImageFluid = data.techStratImage.childImageSharp.fluid
  const devFluid = data.devImage.childImageSharp.fluid
  const collabFluid = data.collabImage.childImageSharp.fluid
  const faceFluid = data.faceImage.childImageSharp.fluid
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />
      <Hero heroFluid={heroFluid} fullHeight>
        <h1 className="title is-2 has-text-light">{pageContent.hero.title}</h1>
        <h2 className="subtitle is-3 has-text-light">{pageContent.hero.subtitle}</h2>
      </Hero>
      <section className="section">
        <div className="container">
          <div className="columns is-centered mb-6">
          <div className="column is-2">
              <Img style={{borderRadius: '100%'}} fluid={{...faceFluid, aspectRatio:1}} />
            </div>
            <div className="column is-9">
              <h1 className="title">Learning for a Living</h1>
              <p className="subtitle is-5 has-text-weight-light">My name is Alex Szeliga. I'm a tech-focused thinker, tinkerer, and fixer. I'm a life-long musician, a capable artist/maker, a focused and cognitive collaborator, a curious student. I'm motivated by exanding my mind through application of the new and nifty.</p>

            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-12">
              <h1 className="title">Would you like to know more?</h1>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-image">
                  <Img fluid={{...devFluid, aspectRatio:1}}/>
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
                  <Img fluid={{...collabFluid, aspectRatio:1}}/>
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
                  <Img fluid={{...techStratImageFluid, aspectRatio:1}}/>
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
    techStratImage: file(relativePath: { eq: "tech-strategy.jpg"}) {
      childImageSharp {
        fluid (quality: 100, maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    devImage: file(relativePath: { eq: "web-dev.jpg"}) {
      childImageSharp {
        fluid (quality: 100, maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    collabImage: file(relativePath: { eq: "f_m-video.jpg"}) {
      childImageSharp {
        fluid( quality: 100, maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    faceImage: file(relativePath: {eq : "my-face.jpg"}) {
      childImageSharp {
        fluid (quality: 100, maxWidth: 1024) {
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
