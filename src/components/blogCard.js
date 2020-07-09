import React from "react"
import { Link } from "gatsby"

const BlogCard = ({post}) => {
    const title = post.node.frontmatter.title
    const slug = post.node.fields.slug
    const excerpt = post.node.excerpt
    const date = post.node.frontmatter.date
    return (
      <div className="">
        <Link className="" to={slug}>
          <p className="title is-4">{title}</p>
        </Link>
        <p className="title is-6">{date}</p>
        <p>{excerpt}</p>
      </div>
    )
}

export default BlogCard