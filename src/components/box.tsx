import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

type Props = {
  attributes: object
}

const Component: React.FC<Props> = ({ attributes, children }) => {
  return (
    <StyledLink to={attributes.node.fields.slug}>
      <div>
        {attributes.node.frontmatter.date}<span>{attributes.node.timeToRead} min read</span>
      </div>
      <h3>{attributes.node.frontmatter.title}</h3>
      <p>{attributes.node.excerpt}</p>
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
  div {
    margin: 0;
    padding: 0;
    margin-bottom: var(--gutter);
    font-size: 0.85rem;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    color: #000;
  }
  span {
    font-weight: normal;
  }
  span:before {
    content: '-';
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  h3 {
    font-size: var(--t3);
  }
  p {
    margin-top: 1rem;
    color: #000;
  }
  @media screen and (max-width:480px) {
    border-right: 0;
  }
`

export default Component
