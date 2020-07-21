import React from "react"
import { Link } from "gatsby"

const RelatedPosts = ({ posts }) => {
    return (
        <div><h1 className="title is-4 has-text-weight-normal">Related Posts</h1>
            {posts.map((post, i) => {
                return (
                    <div className="pb-5" key={i}>
                        <h2 className="title is-5 has-text-weight-normal mb-4">{post.frontmatter.title}</h2>
                        <p className="has-text-weight-light">{post.excerpt}</p>
                        <Link to={post.fields.slug}>Read More...</Link>
                    </div>
                )
            })}</div>
    )
}

export default RelatedPosts