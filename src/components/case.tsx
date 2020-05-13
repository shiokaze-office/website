import React from 'react'
import PropTypes from "prop-types"
import styled from "styled-components"

const Case = styled.div`
  padding: 0 0 0 2.2rem;
  position: relative;
  overflow: hidden;
`

const Circle = styled.span`
  display: block;
  content: ' ';
  position: absolute;
  top: .7rem;
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
  background-color: #E6E0ED;
  width: 8px;
  height: 100%;
`

const Title = styled.p`
  font-weight: bold;
  padding-bottom: .2rem;
`

const Content = styled.div`
  font-size: 1.2rem;
`

const Component = ({ name, children }) => {
  return (
    <Case>
      <Bar />
      <Circle />
      <Title>{name}</Title>
      <Content>
        {children}
      </Content>
    </Case>
  )
}

Component.defaultProps = {
  name: `This is a case.`,
}

Component.propTypes = {
  name: PropTypes.string,
}

export default Component
