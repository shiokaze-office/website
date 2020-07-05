import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import logo from './shiokaze.svg'
import Button from '../button'
import { HeaderQuery } from '../../../types/graphql-types'

const Component: React.FC = () => {
  const { site: { siteMetadata: { title } } } = useStaticQuery<HeaderQuery>(graphql`
    query Header {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Header>
        <Logo>
          <Link to="/"> <img src={logo} alt={title} /> </Link>
        </Logo>
        <Nav>
          <Link to="/will">遺言</Link>
          <Link to="/inheritance">相続手続き</Link>
          <Link to="/guardianship">任意後見契約</Link>
          <Link to="/entrusted-business">事務委任契約</Link>
          <Link to="/family-trust">家族信託</Link>
          <Link to="/blog">ブログ</Link>
        </Nav>
        <About>
          <Button href="/about">行政書士紹介</Button>
          <Button href="/office">事務所案内</Button>
        </About>
    </Header>
  )
}

const Header = styled.header`
  display: grid;
  grid-template-columns: 22rem 1fr 22rem;
  margin: 0 var(--gutter);
  padding-top: 2.5rem;
  padding-bottom: 1.25rem;
  align-items: end;
  border-bottom: 1px solid #000;
  @media screen and (max-width:480px) {
    grid-template-columns: 1fr;
  }
`
const Logo = styled.p`
  padding: 0;
  margin: 0;
  img {
    margin: 0;
    width: 18rem;
    &:hover {
      opacity: 0.8;
    }
  }
  a {
    display: block;
  }
`
const Nav = styled.nav`
  margin: 0;
  text-align: center;
  a {
    display: inline-block;
    padding: 0 .5rem 1rem;
    &:hover {
      opacity: 0.8;
    }
  }
`
const About = styled.nav`
  text-align: right;
  a {
    margin-left: 1rem;
    margin-bottom: .5rem;
  }
  p {
    display: inline;
  }
`

export default Component
