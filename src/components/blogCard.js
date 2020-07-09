import React from "react"
import { Link } from "gatsby"

const BlogCard = ({post}) => {
    const title = post.node.frontmatter.title
    const slug = post.node.fields.slug
    const excerpt = post.node.excerpt
    const date = post.node.frontmatter.date
    return (
      <div className="">
        
          <h1 className="title is-4">{title}</h1>
        <h2 className="title is-6">{date}</h2>
        <p className="is-size-5 has-text-weight-light">{excerpt}</p>
        <Link className="" to={slug}>Read More...</Link>
      </div>
    )
}

export default BlogCard