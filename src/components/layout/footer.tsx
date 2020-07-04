import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Truncate from './truncate'
import logo from './shiokaze-icon.svg'
import { FooterQuery } from '../../../types/graphql-types'

const Component: React.FC = () => {
  const data = useStaticQuery<FooterQuery>(graphql`
    query Footer {
      site {
        siteMetadata {
          title
        }
      }
      pages: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/(proposals|covid)/" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              title
            }
          }
        }
      }
      posts: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/blog/" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 5
      ) {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  const title = data.site.siteMetadata.title
  const pages = data.pages.edges
  const posts = data.posts.edges
  const covid = pages.filter(page =>
    page.node.fields.slug.match('/covid-19-support/')
  )
  const proposals = pages.filter(page =>
    page.node.fields.slug.match('/proposals/')
  )

  return (
    <Footer>
      <Logo>
        <Link to="/"> <img src={logo} alt={title} /> </Link>
        <Copy> &copy; 2014-{new Date().getFullYear()} {title} </Copy>
      </Logo>
      <Sitemap>
        <li>
          業務内容
          <ul>
            <li> <Link to="/will">遺言</Link> </li>
            <li> <Link to="/inheritance">相続手続き</Link> </li>
            <li> <Link to="/guardianship">任意後見契約</Link> </li>
            <li> <Link to="/family-trust">家族信託</Link> </li>
            <li> <Link to="/notarial-deed">公正証書作成</Link> </li>
          </ul>
        </li>
        <li>
          コロナ対策支援
          <ul>
            {covid.map(v => (
              <li key={v.node.id}>
                <Link to={v.node.fields.slug}>
                  {<Truncate>{v.node.frontmatter.title}</Truncate>}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          ご提案
          <ul>
            {proposals.map(v => (
              <li key={v.node.id}>
                <Link to={v.node.fields.slug}>
                  {v.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link to="/blog">ブログ</Link>
          <ul>
            {posts.map(v => (
              <li key={v.node.id}>
                <Link to={v.node.fields.slug}>
                  {<Truncate>{v.node.frontmatter.title}</Truncate>}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          私たち
          <ul>
            <li> <Link to="/about">行政書士紹介</Link> </li>
            <li> <Link to="/office">事務所案内</Link> </li>
          </ul>
        </li>
      </Sitemap>
    </Footer>
  )
}

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 22rem 1fr;
  margin: 6rem 0 2.5rem;
  padding: 1.25rem var(--gutter) 2rem;
  border-top: 1px solid #000;
  align-items: start;
`
const Logo = styled.p`
  grid-column: 1 / 2;
  grid-row: 1;
  padding: 0;
  img {
    margin: 0;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
    width: 7rem;
    &:hover {
      opacity: 0.8;
    }
  }
`
const Sitemap = styled.ul`
  grid-column: 2 / 2;
  grid-row: 1;
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    width: 12rem;
    display: block;
    float: left;
    padding: 1rem 0 0 2rem;
    ul {
      clear: both;
      list-style-type: none;
      margin: 0;
      padding: .5rem 0 0;
      li {
        font-weight: normal;
        float: none;
        padding .5rem 0 0;
      }
    }
  }
`
const Copy = styled.small`
  display: block;
  margin-left: 0.5rem;
  padding: 0;
  font-size: .8rem;
`

export default Component
