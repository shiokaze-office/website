import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components"
import Layout from '../components/layout'
import rehypeReact from "rehype-react"
import Case from "../components/case"
import Callout from "../components/callout"
import Panel from "../components/panel"
import Button from "../components/button"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "case": Case,
    "callout": Callout,
    "panel": Panel,
    "button": Button,
  },
}).Compiler

const Container = styled.article`
  margin: 0 0 3rem;
`

const Header = styled.div`
  margin: 0 1rem 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #E6E0ED;
  h1 {
    padding-top: 0;
  }
`

const Category = styled.article`
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #999;
`

const Meta = styled.div`
  position: absolute;
  top: 1rem;
  right: -300px;
  width: 260px;
  color: #ddd;
  margin: 0;
  padding: 0;
  p {
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  ul {
    margin: 0;
    padding: .5rem 0 1.5rem 1.2rem;
    color: #999;
    line-height: 1.85;
  }
  li {
    padding: 0;
    font-size: 1rem;
  }
`

const Body = styled.div`
  position: relative;
  margin: 0 auto;
  width: 760px;
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
        category
        lead
        tags
      }
    }
  }
`

const Component = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst, fields: { slug } } = markdownRemark
  const { title, lead, tags, category } = frontmatter
  const categoryName = slug.match(/covid-19/) ? `COVID-19 Support` :
    (slug.match(/proposals/) ? 'Proposals' :
    (category === null ? 'Services' : category))

  return (
    <Layout>
      <Container>
        <Header>
          <div className="container">
            <Category>{categoryName}</Category>
            <h1>{title}</h1>
            <p>{lead}</p>
          </div>
        </Header>
        <Body>
          {tags !== null && <Meta>
            <p>Tags:</p>
            <ul>
              {tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </Meta>}
          {renderAst(htmlAst)}
        </Body>
      </Container>
    </Layout>
  )
}

export default Component
