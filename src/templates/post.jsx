import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import rehypeReact from "rehype-react"
import Case from "../components/case"
import Callout from "../components/callout"
import Panel from "../components/panel"
import Head from "../components/head"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "case": Case, "callout": Callout, "panel": Panel },
}).Compiler

export const query = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      id
      htmlAst
      timeToRead
      excerpt(truncate: true, pruneLength: 100)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`

const Component = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst, excerpt } = markdownRemark
  const { title, tags } = frontmatter

  return (
    <Layout>
      <Head title={title} description={excerpt} keywords={tags} />
      <div className="container">
        <div className="blog-post">
          <h1 align="center">{frontmatter.title}</h1>
          <div className="blog-post-content">
            {renderAst(htmlAst)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Component

