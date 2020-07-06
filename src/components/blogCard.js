import React from "react"

const BlogCard = ({post}) => {
    const title = post.node.frontmatter.title
    const slug = post.node.fields.slug
    const excerpt = post.node.excerpt
    const date = post.node.frontmatter.date
    return (
        <div>
          <p>{title}</p>
          <p>{slug}</p>
          <p>{excerpt}</p>
          <p>{date}</p>
        </div>
    )
}

export default BlogCard