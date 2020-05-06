import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from "styled-components"
import logo from "./shiokaze.svg"

const Logo = styled.p`
  padding: 0;
`

const Component = () => {
  const data = useStaticQuery(graphql`
    query HeaderTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const title = data.site.siteMetadata.title

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Logo className="logo">
            <Link to="/">
              <img className="logomark" src={logo} alt={title} />
            </Link>
          </Logo>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/will">
              遺言
            </Link>
            <Link className="navbar-item" to="/inheritance">
              相続手続き
            </Link>
            <Link className="navbar-item" to="/guardianship">
              任意後見契約
            </Link>
            <Link className="navbar-item" to="/entrusted-business">
              事務委任契約
            </Link>
            <Link className="navbar-item" to="/family-trust">
              家族信託
            </Link>
            <Link className="navbar-item" to="/blog">
              ブログ
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-outlined" to="/about">
                  行政書士紹介
                </Link>
                <Link className="button is-outlined" to="/office">
                  事務所アクセス
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Component
