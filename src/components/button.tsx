import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

type Props = {
  href: string
  bare?: boolean
  size?: string
  align?: string
}

const Component: React.FC<Props> = ({ href, bare, size, align, children }) => {
  const buttonClass = `
    text-align: center;
    font-family: 'Noto Sans JP', sans-serif;
    align-items: center;
    border: 1px solid #000;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    font-size: .8rem;
    justify-content: flex-start;
    vertical-align: top;
    background-color: #fff;
    cursor: pointer;
    justify-content: center;
    padding: calc(.3em - 1px) 1em;
    height: 1.5rem;
    white-space: nowrap;
    color: #000;
    line-height: 1;
    &:hover {
      border-color: #999;
    }
  `
  const largeClass = `
    font-size: 1.2rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    height: 2.5rem;
  `
  const smallClass = `
    font-size: 0.7rem;
  `
  const Button = styled.p`
    text-align: center;
    .button { ${buttonClass} }
    .large { ${largeClass} }
    .small { ${smallClass} }
  `
  const StyledLink = styled(Link)`
    text-align: ${size === 'large' ? 'center' : align};
    ${buttonClass}
    &.large { ${largeClass} }
    &.small { ${smallClass} }
  `

  if (href.match(/^https:\/\//) !== null) {
    return (
      <Button>
        <a className={'button ' + size} href={href}>
          {children}
        </a>
      </Button>
    )
  }

  if (bare) {
    return (
      <StyledLink className={'button ' + size} to={href}>
        {children}
      </StyledLink>
    )
  }

  return (
    <Button>
      <Link className={'button ' + size} to={href}>
        {children}
      </Link>
    </Button>
  )
}

Component.defaultProps = {
  size: `medium`,
  align: `left`,
  bare: false,
}

export default Component
