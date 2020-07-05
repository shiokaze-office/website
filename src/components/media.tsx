import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

type Props = {
  href: string
}

const Component: React.FC<Props> = ({ href }) => {
  const Container = styled.div`
    width: 140%;
    margin: 2rem 0;
    height: auto;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    p {
      padding-top: 0.5rem;
      font-size: 0.85rem;
      text-align: center;
    }
    a {
      color: #999;
      font-weight: bold;
    }
    iframe {
      width: 100%;
      height: 500px;
    }
    @media screen and (max-width:480px) {
      width: 100%;
      iframe {
        height: 200px;
      }
    }
  `
  const matched = href.match(/\?v=(\w+)/)

  return (
    <Container>
      {matched && (
        <iframe
          src={`https://www.youtube.com/embed/${matched[1]}`}
          title={href}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <p>
        <Link to={href}>{href}</Link>
      </p>
    </Container>
  )
}

export default Component
