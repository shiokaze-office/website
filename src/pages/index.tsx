import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import Box from '../components/box'
import ProposalBox from '../components/proposal/box'
import Covid19SupportBox from '../components/covid-19-support/box'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { IndexPageQuery } from '../../types/graphql-types'

type Props = {
  data: IndexPageQuery
}

const Component: React.FC<Props> = ({ data }) => {
  const file = data.file
  const pages = data.pages.edges
  const posts = data.posts.edges
  const proposals = pages.filter(page =>
    page.node.fields.slug.match('/proposals/')
  )
  const covid = pages.filter(page =>
    page.node.fields.slug.match('/covid-19-support/')
  )

  return (
    <Layout>
      <Head />
      <FV>
        <FVSub>頼れる街の法律家</FVSub>
        <h1>安心できる老後へ</h1>
        <Img className="top-eyecatch" fluid={file.childImageSharp.fluid} />
        <FVText>
          しおかぜ事務所は、<em>成年後見</em>、<em>遺言</em>、<em>事務委任</em>
          、<em>信託</em>
          などを利用して、安心できる老後へサポートする行政書士事務所です
        </FVText>
      </FV>

      <Container>
        <Header>
          <h2>新型コロナ対応支援</h2>
          <p>
            新型コロナウイルスによって影響を受けている方々に向けて、各省庁や地方自治体が支援を行って支援を
            「個人事業者・企業」と「個人」に分けてまとめました。
          </p>
        </Header>
        <Body>
          {covid.map((entry, i) => (
            <Covid19SupportBox key={entry.node.id} num={('00'+(1+i)).slice(-2)} attributes={entry} />
          ))}
        </Body>
      </Container>

      <Container>
        <Header>
          <h2>私たちからのご提案</h2>
          <p>老後の生活に不安や不便を感じるすべての方へ、お客様にあったご提案をします。</p>
        </Header>
        <Body2Col>
          {proposals.map(proposal => (
            <ProposalBox key={proposal.node.id} attributes={proposal} />
          ))}
        </Body2Col>
        <Footer>
          <Link to="/proposals">ご提案の一覧へ</Link>
        </Footer>
      </Container>

      <Container>
        <Header>
          <h2>ブログ</h2>
          <p>日常業務でのちょっとした気づきなどを中心に書きます</p>
        </Header>
        <Body>
          {posts.map(post => (
            <Box key={post.node.id} attributes={post} />
          ))}
        </Body>
        <Footer>
          <Link to="/blog">ブログの一覧へ</Link>
        </Footer>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query IndexPage {
    file(relativePath: { eq: "images/top.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pages: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/(proposals|covid)/" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
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
    posts: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/blog/" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
    ) {
      edges {
        node {
          id
          timeToRead
          excerpt(truncate: true, pruneLength: 50)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY年MM月DD日")
            title
            lead
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

const FV = styled.div`
  padding: 0 0 2rem;
  h1 {
    text-align: center;
    padding: 0;
  }
  picture {
    max-width: 800px;
    margin: 0 auto 2rem;
  }
  .top-eyecatch {
    max-width: 800px;
    margin: 0 auto 2.5rem;
  }
`
const FVSub = styled.p`
  text-align: center;
  margin: 3rem 0 -1rem;
  padding: 0 0 0;
  font-family: 'Noto Serif JP', serif;
  color: #999;
  letter-spacing: 0.5rem;
  font-size: .9rem;
`
const FVText = styled.p`
  max-width: 640px;
  margin: 0 auto;
`
const Container = styled.section`
  margin-top: 6.25rem;
  margin-bottom: 15.625rem;
`
const Header = styled.div`
  padding: 0 var(--gutter);
`
const Body = styled.div`
  margin-top: 1.875rem;
  border-top: 1px solid rgb(0, 0, 0);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const Body2Col = styled(Body)`
  grid-template-columns: repeat(2, 1fr);
`
const Footer = styled.div`
  border-bottom: 1px solid #000;
  a {
    font-size: 1.6rem;
    padding: 2rem;
    display: block;
    text-align: center;
    font-weight: bold;
  }
`

export default Component
