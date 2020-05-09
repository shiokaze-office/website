import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from "styled-components"
import Layout from '../components/layout'
import Head from "../components/head"

const Container = styled.article`
  margin: 0 0 3rem;
`

const Header = styled.div`
  margin: 0 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #E6E0ED;
  h1 {
    padding-top: 0;
  }
  .container {
    margin-top: 0;
  }
`

const Category = styled.article`
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #999;
`

const PostMeta = styled.ul`
  margin: -.5rem 0 1rem;
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

const Card = styled.div`
`

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { slug: { regex: "/blog/" } } }
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

const Component = ({ data: { allMarkdownRemark: { edges }}}) => {
  const posts = edges.filter(edge => !!edge.node.frontmatter.date)
  const title = `ブログ`
  const description = `日常業務でのちょっとした気づきなどを中心に書きます`

  return (
    <Layout>
      <Head title={title} description={description} />
      <Container>
        <Header>
          <div className="container">
            <Category>Blog</Category>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </Header>
        <Body>
          <div className="container">
          {posts.map(post => (
            <Card key={post.node.id}>
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
            </Card>
          ))}
          </div>
        </Body>
      </Container>
    </Layout>
  )
}

export default Component
