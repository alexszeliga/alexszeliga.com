import React from "react"
import { Link } from "gatsby"

const BlogCard = ({ post }) => {
  const title = post.node.frontmatter.title
  const slug = post.node.fields.slug
  const excerpt = post.node.excerpt
  const date = post.node.frontmatter.date
  return (
    <div className="mb-6">
      <h1 className="title is-5">{title}</h1>
      <h2 className="title is-6">{date}</h2>
      <p className="has-text-weight-light">{excerpt}</p>
      <Link className="" to={slug}>Read More...</Link>
    </div>
  )
}

export default BlogCard