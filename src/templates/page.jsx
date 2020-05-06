import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components"
import Layout from '../components/layout'
import rehypeReact from "rehype-react"
import Case from "../components/case"
import Callout from "../components/callout"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "case": Case, "callout": Callout },
}).Compiler

const Container = styled.article`
`
const Header = styled.div`
`

const Meta = styled.div`
  top: 1rem;
  color: #ddd;
  ul {
    padding: .5rem 0 1.5rem .5rem; 
    color: #999;
  }
  li {
    padding: 0 0 .8rem .5rem;
  }
`

const Body = styled.div`
  position: relative;
  margin: 0 auto;
`

export const query = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      id
      htmlAst
      timeToRead
      frontmatter {
        title
        lead
        tags
      }
    }
  }
`

const Component = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  const { title, lead, tags } = frontmatter

  return (
    <Layout>
      <Container className="container">
        <Header>
          <h1>{title}</h1>
          <p>{lead}</p>
        </Header>
        <Body className="columns">
          <Meta className="column is-one-fifth">
            <ul>
              {tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </Meta>
          {renderAst(htmlAst)}
        </Body>
      </Container>
    </Layout>
  )
}

export default Component

