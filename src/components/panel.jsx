import React from 'react'
import PropTypes from "prop-types"
import styled from "styled-components"

const Panel = styled.div`
  width: 400px;
  height: 260px;
  margin: 0 auto 1.5rem;
  padding: 0;
  border: 10px solid #7ebeab;
  border-top: 2px solid #7ebeab;
  text-align: center;
  color: #7ebeab;
`
const Text = styled.p`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  background-color: #7ebeab;
  color: #fff;
  padding: .5rem;
  text-align: center;
  line-height: 1.5;
`
const Note = styled.span`
  font-weight: bold;
  display: inline-block;
  line-height: 1.5;
  vertical-align: top;
  padding-top: 2rem;
  font-feature-settings: "palt";
`
const Number = styled.span`
  font-family: 'Century Gothic', arial, 'Noto Sans JP', sans-serif;
  font-size: 8rem;
  font-weight: bold;
  display: inline-block;
  line-height: 1.5;
  letter-spacing: -0.3rem;
`
const Unit = styled.span`
  font-weight: bold;
  display: inline-block;
  line-height: 1.5;
`

const Component = ({ number, unit, text, note }) => {
  return (
    <Panel>
      <Text>{text}</Text>
      <p>
        <Note>{note}</Note>
        <Number>{number}</Number>
        <Unit>{unit}</Unit>
      </p>
    </Panel>
  )
}

Component.defaultProps = {
  number: ``,
  unit: ``,
  text: ``,
  note: ``,
}

Component.propTypes = {
  number: PropTypes.string,
  unit: PropTypes.string,
  text: PropTypes.string,
  note: PropTypes.string,
}

export default Component
