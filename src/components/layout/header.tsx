import React, { useState } from 'react'
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

  const [open, setOpen] = useState(false)

  return (
    <div>
      <Header open={open}>
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

        <Burger>
          <button onClick={() => setOpen(!open)} aria-expanded="{open}" aria-controls="navigation" aria-label="Navigation" aria-haspopup="true">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19.5" stroke="currentColor"></circle>
              {open === false &&
                <path fill="currentColor" d="M12 16v-2h17v2zM12 21v-2h17v2zM12 26v-2h17v2z"></path>
              }
              {open === true &&
                <path d="M14 14l13 12m-13 0l13-12" stroke="currentColor" strokeWidth="2"></path>
              }
            </svg>
          </button>
        </Burger>

        <Nav4Mob open={open}>
          <div className="job">
            <Link to="/will">遺言</Link>
            <Link to="/inheritance">相続手続き</Link>
            <Link to="/guardianship">任意後見契約</Link>
            <Link to="/entrusted-business">事務委任契約</Link>
            <Link to="/family-trust">家族信託</Link>
            <Link to="/blog">ブログ</Link>
          </div>
          <div className="info">
            <Button href="/about">行政書士紹介</Button>
            <Button href="/office">事務所案内</Button>
          </div>
        </Nav4Mob>
      </Header>
      <Nav4MobLayer open={open} />
    </div>
  )
}

const Header = styled.header`
  display: grid;
  grid-template-columns: 22rem 1fr 22rem;
  margin: ${({ open }) => (open ? "0" : "0 var(--gutter)")};
  padding: ${({ open }) => (open ? "0 var(--gutter)" : "0")};
  padding-top: 2.5rem;
  padding-bottom: 1.25rem;
  align-items: end;
  border-bottom: 1px solid #000;
  position: relative;
  z-index: 4;
  background-color: #fff;
  @media screen and (max-width:480px) {
    grid-template-columns: 1fr 2rem;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
  }
`
const Logo = styled.p`
  padding: 0;
  margin: 0;
  img {
    margin: 0;
    width: 15rem;
    &:hover {
      opacity: 0.8;
    }
  }
  a {
    display: block;
    line-height: 1;
  }
  @media screen and (max-width:480px) {
    img {
      width: 17rem;
    }
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
  @media screen and (max-width:480px) {
    display: none;
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
  @media screen and (max-width:480px) {
    display: none;
  }
`
const Burger = styled.div`
  display: none;
  @media screen and (max-width:480px) {
    display: block;
    width: 2rem;
    line-height: 1;
    button {
      margin: 0;
      padding: 0;
      width: 2rem;
      border: none;
      background: transparent;
      cursor: pointer;
    }
    svg {
      width: 2rem;
      display: block;
    }
  }
`
const Nav4Mob = styled.div`
  display: none;
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  max-height: ${({ open }) => (open ? "calc(0rem + 100vh)" : "0")};
  background: #fff;
  z-index: 4;
  -webkit-transition: ${({ open }) => (open ? "max-height 350ms ease 0s" : "background 350ms")};
  transition: ${({ open }) => (open ? "max-height 350ms ease 0s" : "background 350ms")};
  overflow-y: auto;
  .job {
    padding-bottom: var(--gutter);
    a {
      display: block;
      padding: var(--gutter);
      border-bottom: 1px solid #000;
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMUwxMCAxMEwxIDE5IiBzdHJva2U9ImJsYWNrIi8+Cjwvc3ZnPgo=) no-repeat;
      background-position: right var(--gutter) bottom var(--gutter);
      background-size: 0.75rem 1rem;
      transition: background 400ms cubic-bezier(.25,1,1,1);
    }
  }
  .info {
    margin-bottom: var(--gutter);
    padding-bottom: var(--gutter);
    p {
      display: inline;
      margin-left: var(--gutter);
    }
  }

  @media screen and (max-width:480px) {
    display: ${({ open }) => (open ? "block" : "none")};
    transform: ${({ open }) => (open ? "translateY(100%)" : "translateY(0)")};
  }
`
const Nav4MobLayer = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  inset: 0;
  background: rgba(0, 0, 0, 0.5) none repeat scroll 0% 0%;
  z-index: 2;
  transition: background 350ms ease 0s;
  width: 100vw;
  height: 100vh;
`

export default Component
