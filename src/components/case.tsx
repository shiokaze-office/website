import React from 'react'
import styled from 'styled-components'

const Case = styled.div`
  padding: 0 0 0 2.2rem;
  position: relative;
  overflow: hidden;
`

const Circle = styled.span`
  display: block;
  content: ' ';
  position: absolute;
  top: 0.7rem;
  left: 1px;
  border-radius: 10px;
  background-color: #cec0d9;
  width: 21px;
  height: 21px;
`

const Bar = styled.span`
  display: block;
  content: ' ';
  position: absolute;
  top: -1.5rem;
  left: 7px;
  border-radius: 5px;
  background-color: #e6e0ed;
  width: 8px;
  height: 100%;
`

const Title = styled.p`
  font-weight: bold;
  padding-bottom: 0.2rem;
`

const Content = styled.div`
  font-size: 1.2rem;
`

type Props = {
  name?: string
}

const Component: React.FC<Props> = ({ name, children }) => {
  return (
    <Case>
      <Bar />
      <Circle />
      <Title>{name}</Title>
      <Content>{children}</Content>
    </Case>
  )
}

Component.defaultProps = {
  name: `This is a case.`,
}

export default Component
