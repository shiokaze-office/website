import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from "styled-components"
import Img from "gatsby-image"

const FV = styled.div`
  padding: 0 0 2rem;
  h1 {
    text-align: center;
    padding: 0;
  }
  picture {
    max-width: 1024px;
    margin: 0 auto 2rem;
  }
`

const FVSub =  styled.p`
  text-align: center;
  margin: 0;
  padding: 1.2rem 0 0;
  font-family: 'Noto Serif JP', serif;
  color: #999;
  letter-spacing: .5rem;
  font-size: 1rem;
`
const FVText = styled.p`
  max-width: 640px;
  margin: 0 auto;
`

const Container = styled.div`
  h2 {
    color: #555;
  }
`

const PostMeta = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  li {
    font-size: .85rem;
    color: #999;
    margin: 0 .5rem 0 0;
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
    padding-right: .5rem;
  }
`

export const query = graphql`
  query {
    file(relativePath: { eq: "images/top.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/(proposals|blog|covid)/" }}}
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
            date(formatString: "YYYY年MM月DD日")
            title
            lead
          }
        }
      }
    }
  }
`

const Component = ({ data: { file, allMarkdownRemark: { edges }}}) => {
  const proposals = edges.filter(edge => edge.node.fields.slug.match("/proposals/"))
  const posts = edges.filter(edge => edge.node.fields.slug.match("/blog/"))
  const covid = edges.filter(edge => edge.node.fields.slug.match("/covid-19-support/"))

  return (
    <Layout>
      <>
        <FV className="container">
          <FVSub>頼れる街の法律家</FVSub>
          <h1>安心できる老後へ</h1>
          <Img fluid={file.childImageSharp.fluid} />
          <FVText>
            しおかぜ事務所は、<em>成年後見</em>、<em>遺言</em>、<em>事務委任</em>、
            <em>信託</em>などを利用して、安心できる老後へサポートする行政書士事務所です
          </FVText>
        </FV>

        <Container className="container">
          <h2>新型コロナ対応支援</h2>
          <p>
            新型コロナウイルスによって影響を受けている方々に向けて、各省庁や地方自治体が支援を行って支援を
            「個人事業者・企業」と「個人」に分けてまとめました。
          </p>

          <div className="columns">
            {covid.map(entry => (
              <div key={entry.node.id} className="column">
                <h3>
                  <Link to={entry.node.fields.slug}>
                    {entry.node.frontmatter.title}
                  </Link>
                </h3>
                <p>
                  {entry.node.frontmatter.lead}
                </p>
                <p>
                  <Link className="button" to={entry.node.fields.slug}>
                    続きを読む
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </Container>

        <Container className="container">
          <h2>私たちからのご提案</h2>
          <p>老後の生活に不安や不便を感じるすべての方へ、お客様にあったご提案をします。</p>

          <div className="columns">
            {proposals.map(proposal => (
              <div key={proposal.node.id} className="column">
                <h3>
                  <Link to={proposal.node.fields.slug}>
                    {proposal.node.frontmatter.title}
                  </Link>
                </h3>
                <p>
                  {proposal.node.frontmatter.lead}
                </p>
                <p>
                  <Link className="button" to={proposal.node.fields.slug}>
                    続きを読む
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </Container>

        <Container className="container">
          <h2>ブログ</h2>
          <p>日常業務でのちょっとした気づきなどを中心に書きます</p>

          <div className="columns">
            {posts.map(post => (
              <div key={post.node.id} className="column">
                <h3 className="post-title">
                  <Link to={post.node.fields.slug}>
                    {post.node.frontmatter.title}
                  </Link>
                </h3>
                <PostMeta>
                  <li>{post.node.frontmatter.date}</li>
                  <li><span>{post.node.timeToRead} min read</span></li>
                </PostMeta>
                <p className="post-excerpt">
                  {post.node.excerpt}
                </p>
                <p className="post-permalink">
                  <Link className="button" to={post.node.fields.slug}>
                    続きを読む
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </>
    </Layout>
  )
}

export default Component
