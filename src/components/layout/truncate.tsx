import React, { ReactNode } from 'react'

type Props = {
  length?: number
  omission?: string
  children?: ReactNode
}

const Component: React.FC<Props> = ({ length, omission, children }) => {
  const s = `${children}`
  return <>{s.length > length ? `${s.substr(0, length)}${omission}` : s}</>
}

Component.defaultProps = {
  length: 12,
  omission: `...`,
}

export default Component
