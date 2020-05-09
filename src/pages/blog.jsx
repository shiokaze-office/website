import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from "../components/head"

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { slug: { regex: "/blog/" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt
          timeToRead
          frontmatter {
            date(formatString: "YYYY年MM月DD日")
            title
          }
        }
      }
    }
  }
`

const Component = ({ data: { allMarkdownRemark: { edges }}}) => {
  const posts = edges.filter(edge => !!edge.node.frontmatter.date)
  const title = `ブログ`
  const description = `日常業務でのちょっとした気づきなどを中心に書きます`

  return (
    <Layout>
      <Head title={title} description={description} />
      <div>
        {posts.map(post => (
          <div className="column">
            <h3 className="post-title">
              <Link key={post.node.id} to={post.node.fields.slug}>
                {post.node.frontmatter.title}
              </Link>
            </h3>
            <p className="post-meta">
              {post.node.frontmatter.date} - {post.node.timeToRead} min read
            </p>
            <p className="post-excerpt">
              {post.node.excerpt}
            </p>
            <p className="post-permalink">
              <Link className="button" key={post.node.id} to={post.node.fields.slug}>
                続きを読む
              </Link>
            </p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Component
