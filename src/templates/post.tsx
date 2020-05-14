import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import rehypeReact from 'rehype-react'
import Case from '../components/case'
import Callout from '../components/callout'
import Panel from '../components/panel'
import Button from '../components/button'
import Map from '../components/map'
import Head from '../components/head'
import { PostTemplateQuery } from '../../types/graphql-types'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    case: Case,
    callout: Callout,
    panel: Panel,
    button: Button,
    map: Map,
  },
}).Compiler

const Container = styled.article`
  margin: 0 auto 3rem;
  width: 760px;
`

const Header = styled.div`
  margin: 0;
  padding: 1rem 0;
`

const Category = styled.article`
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #999;
`

const PostMeta = styled.ul`
  margin: -0.5rem 0 2rem;
  padding: 0;
  list-style-type: none;
  li {
    font-size: 0.85rem;
    color: #999;
    margin: 0 0.5rem 0 0;
    padding: 0;
    font-family: 'Noto Sans JP', sans-serif;
    display: inline-block;
    font-weight: bold;
  }
  span {
    font-weight: normal;
  }
  span:before {
    content: '-';
    padding-right: 0.5rem;
  }
`

const Body = styled.div`
  position: relative;
  margin: 0;
  h2 {
    padding-top: 2rem;
  }
  h3 {
    padding-top: 1.2rem;
  }
`

const Footer = styled.div`
  margin: 3rem 0 0;
`

const Meta = styled.div`
  margin: 0;
  padding: 0;
  p {
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    display: inline-block;
    color: #999;
  }
  ul {
    margin: 0;
    padding: 0;
    display: inline;
  }
  li {
    font-size: 1rem;
    margin: 0 0 0 1rem;
    display: inline-block;
  }
`

export const query = graphql`
  query PostTemplate($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      id
      htmlAst
      timeToRead
      excerpt(truncate: true, pruneLength: 100)
      fields {
        slug
      }
      frontmatter {
        date(formatString: "YYYY年MM月DD日")
        title
        tags
      }
    }
  }
`

type Props = {
  data: PostTemplateQuery
}

const Component: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data
  const { timeToRead, frontmatter, htmlAst, excerpt } = markdownRemark
  const { title, date, tags } = frontmatter

  return (
    <Layout>
      <Head title={title} description={excerpt} keywords={tags} />
      <Container>
        <Header>
          <Category>Blog</Category>
          <h1>{title}</h1>
          <PostMeta>
            <li>{date}</li>
            <li>
              <span>{timeToRead} min read</span>
            </li>
          </PostMeta>
        </Header>
        <Body>{renderAst(htmlAst)}</Body>
        {tags !== null && (
          <Footer>
            <Meta>
              <p>Tags:</p>
              <ul>
                {tags.map(tag => (
                  <li className="button" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </Meta>
          </Footer>
        )}
      </Container>
    </Layout>
  )
}

export default Component
