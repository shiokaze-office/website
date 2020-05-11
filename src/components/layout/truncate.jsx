import React from 'react'
import PropTypes from "prop-types"

const Component = ({ length, omission, children }) => {
  const s = `${children}`
  return (
    <>
      {s.length > length ? `${s.substr(0, length)}${omission}` : s}
    </>
  )
}

Component.defaultProps = {
  length: 12,
  omission: `...`,
}

Component.propTypes = {
  length: PropTypes.number,
  omission: PropTypes.string,
}

export default Component
