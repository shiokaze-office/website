import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Head from '../components/head'
import Button from '../components/button'
import Box from '../components/box'
import Intro from '../components/intro'
import { BlogPageQuery } from '../../types/graphql-types'

type Props = {
  data: BlogPageQuery
}

const Component: React.FC<Props> = ({ data }) => {
  const posts = data.blog.edges
  const title = `ブログ`
  const desc = `日常業務でのちょっとした気づきなどを中心に書きます`

  return (
    <Layout>
      <Head title={title} description={desc} />
      <Container>
        <Intro titleName="Blog" title={title} descName="Description" desc={desc} />
        <Body>
          {posts.map(post => (
            <Box  key={post.node.id} attributes={post} />
          ))}
        </Body>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogPage {
    blog: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { slug: { regex: "/blog/" } } }
      limit: 15
    ) {
      edges {
        node {
          id
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
    }
  }
`

const Container = styled.article`
  margin: 0 0 3rem;
`
const PostMeta = styled.ul`
  margin: -0.5rem 0 1rem;
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
  margin-top: 1.875rem;
  border-top: 1px solid rgb(0, 0, 0);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width:480px) {
    grid-template-columns: 1fr;
    border-left: 1px solid rgb(0, 0, 0);
    border-right: 1px solid rgb(0, 0, 0);
    margin-left: var(--gutter);
    margin-right: var(--gutter);
  }
`
const Card = styled.div``

export default Component
