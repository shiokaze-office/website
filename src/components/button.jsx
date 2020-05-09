import React from 'react'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import styled from "styled-components"

const Component = ({ href, size, align, children }) => {
  const Button = styled.p`
    text-align: ${size === 'large' ? 'center' : align};
    .large {
      font-size: 1.3rem;
      margin-top: .5rem;
      margin-bottom: 1rem;
    }
    .medium {
      font-size: 1rem;
    }
    .small {
      font-size: .85rem;
    }
  `

  return (
    <Button>
      <Link className={"button " + size} to={href}>{children}</Link>
    </Button>
  )
}

Component.defaultProps = {
  size: `medium`,
  align: `left`,
}

Component.propTypes = {
  href: PropTypes.string.isRequired,
  size: PropTypes.string,
  align: PropTypes.string,
}

export default Component
