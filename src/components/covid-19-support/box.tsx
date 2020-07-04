import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

type Props = {
  num: number
  attributes: object
}

const Component: React.FC<Props> = ({ num, attributes, children }) => {
  return (
    <StyledLink to={attributes.node.fields.slug}>
      <div>{num}</div>
      <h3>{attributes.node.frontmatter.title}</h3>
      <p>{attributes.node.frontmatter.lead}</p>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  display: block;
  padding: var(--gutter);
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  &:hover {
    background-color: #f8f8f8;
  }
  &:last-child {
    border-right: none;
  }
  div {
    margin: 0;
    padding: 0;
    margin-bottom: var(--gutter);
    font-size: 0.85rem;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
  }
  span {
    font-weight: normal;
  }
  span:before {
    content: '-';
    padding-right: 0.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    margin-top: 1rem;
  }
`

export default Component
