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
import Header from '../components/article/header'
import Body from '../components/article/body'
import Footer from '../components/article/footer'
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
        <Header titleName="Blog" title={title} descName="Date" desc="">
          <PostDate>{date}</PostDate>
          <TimeToRead>{timeToRead} min read</TimeToRead>
        </Header>
        <Body>
          {renderAst(htmlAst)}
        </Body>
        <Footer tags={tags} />
      </Container>
    </Layout>
  )
}

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

const Container = styled.article`
  margin: 0 auto 3rem;
`
const PostDate = styled.span`
  font-size: 0.85rem;
  color: #999;
  margin: 0 0.5rem 0 0;
  padding: 0;
  font-family: 'Noto Sans JP', sans-serif;
  display: inline-block;
  font-weight: bold;
`
const TimeToRead = styled.span`
  font-weight: normal;
  &:before {
    content: '-';
    padding-right: 0.5rem;
  }
`

export default Component
