import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Head from '../components/head'
import Button from '../components/button'
import Box from '../components/proposal/box'
import Intro from '../components/intro'
import { ProposalsPageQuery } from '../../types/graphql-types'

type Props = {
  data: ProposalsPageQuery
}

const Component: React.FC<Props> = ({ data }) => {
  const posts = data.proposals.edges
  const title = `私たちからのご提案`
  const desc = `老後の生活に不安や不便を感じるすべての方へ、お客様にあったご提案をします。`

  return (
    <Layout>
      <Head title={title} description={desc} />
      <Container>
        <Intro titleName="Proposals" title={title} descName="Description" desc={desc} />
        <Body>
          {posts.map(post => (
            <Box key={post.node.id} attributes={post} />
          ))}
        </Body>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ProposalsPage {
    proposals: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { slug: { regex: "/proposals/" } } }
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
            lead
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
  grid-template-columns: repeat(2, 1fr);
`
const Card = styled.div``

export default Component
