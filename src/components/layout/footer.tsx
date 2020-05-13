import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from "styled-components"
import Truncate from "./truncate"
import logo from "./shiokaze-icon.svg"

const Logo = styled.p`
  display: block;
  float: left;
  text-align: right;
  img {
    margin-left: .5rem;
    width: 6rem;
    height: 4rem;
  }
`
const Sitemap = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    width: 12.5rem;
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
`

const Component = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/(proposals|blog|covid)/" }}}
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
    }
  `)
  const title = data.site.siteMetadata.title
  const edges = data.allMarkdownRemark.edges
  const covid = edges.filter(edge => edge.node.fields.slug.match("/covid-19-support/"))
  const proposals = edges.filter(edge => edge.node.fields.slug.match("/proposals/"))
  const posts = edges.filter(edge => edge.node.fields.slug.match("/blog/"))

  return (
    <footer className="footer is-clearfix">
      <nav className="footer-nav is-clearfix">
        <Logo className="logo">
          <Link to="/">
            <img className="logomark" src={logo} alt={title} />
          </Link>
        </Logo>

        <Sitemap>
          <li>業務内容
            <ul>
              <li><Link to="/will">遺言</Link></li>
              <li><Link to="/inheritance">相続手続き</Link></li>
              <li><Link to="/guardianship">任意後見契約</Link></li>
              <li><Link to="/family-trust">家族信託</Link></li>
              <li><Link to="/notarial-deed">公正証書作成</Link></li>
            </ul>
          </li>
          <li>コロナ対策支援
            <ul>{covid.map(v => (
              <li key={v.node.id}><Link to={v.node.fields.slug}>
                {<Truncate>{v.node.frontmatter.title}</Truncate>}
              </Link></li>
            ))}</ul>
          </li>
          <li>ご提案
            <ul>{proposals.map(v => (
              <li key={v.node.id}><Link to={v.node.fields.slug}>
                {v.node.frontmatter.title}
              </Link></li>
            ))}</ul>
          </li>
          <li><Link to="/blog">ブログ</Link>
            <ul>{posts.map(v => (
              <li key={v.node.id}><Link to={v.node.fields.slug}>
                {<Truncate>{v.node.frontmatter.title}</Truncate>}
              </Link></li>
            ))}</ul>
          </li>
          <li>私たち
            <ul>
              <li><Link to="/about">行政書士紹介</Link></li>
              <li><Link to="/office">事務所案内</Link></li>
            </ul>
          </li>
        </Sitemap>
      </nav>

      <div className="cotent has-text-centered is-clearfix">
        <Copy>&copy; 2014-{new Date().getFullYear()} {title}</Copy>
      </div>
    </footer>
  )
}

export default Component
