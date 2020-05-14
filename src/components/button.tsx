import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

type Props = {
  href: string
  size?: string
  align?: string
}

const Component: React.FC<Props> = ({ href, size, align, children }) => {
  const Button = styled.p`
    text-align: ${size === 'large' ? 'center' : align};
    .large {
      font-size: 1.3rem;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
    .medium {
      font-size: 1rem;
    }
    .small {
      font-size: 0.85rem;
    }
  `

  if (href.match(/^https:\/\//) !== null) {
    return (
      <Button>
        <a className={"button " + size} href={href}>{children}</a>
      </Button>
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
}

export default Component
