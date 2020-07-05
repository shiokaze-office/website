import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

type Props = {
  attributes: object
}

const Component: React.FC<Props> = ({ attributes, children }) => {
  return (
    <StyledLink to={attributes.node.fields.slug}>
      {attributes.node.frontmatter.featuredImage && (
        <FeaturedImage>
          <Img
            fluid={
              attributes.node.frontmatter.featuredImage.childImageSharp
                .fluid
            }
          />
        </FeaturedImage>
      )}
      <div>
        {attributes.node.frontmatter.tags.join(', ')}<span>{attributes.node.timeToRead} min read</span>
      </div>
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
  }
  @media screen and (max-width:480px) {
    border-right: 0;
  }
`
const FeaturedImage = styled.div`
  margin: var(--p2) 0 var(--t3);
  max-height: 300px;
  img {
    max-height: 300px;
  }
  @media screen and (max-width:480px) {
    margin: 0;
    padding: 0;
    border-right: 0;
  }
`

export default Component
