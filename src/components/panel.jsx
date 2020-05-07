import React from 'react'
import PropTypes from "prop-types"
import styled from "styled-components"

const Panel = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto 1.5rem;
  padding: 0;
  border: 10px solid #CEC0D9;
  border-top: 2px solid #CEC0D9;
  text-align: center;
  color: #CEC0D9;
`
const Text = styled.span`
  font-size: 2rem;
  font-family: 'Noto Sans JP', sans-serif;
  display: block;
  font-weight: bold;
  background-color: #CEC0D9;
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
const Raw = styled.span`
  font-size: 4rem;
  font-weight: bold;
  display: inline-block;
  line-height: 1.2;
  padding: 1rem 0;
  letter-spacing: .3rem;
`
const Unit = styled.span`
  font-weight: bold;
  display: inline-block;
  line-height: 1.5;
`

const Component = ({ number, unit, text, note, raw }) => {
  return (
    <Panel>
      <Text>{text}</Text>
      {note !== '' && <Note>{note}</Note>}
      {number !== '' && <Number>{number}</Number>}
      {unit !== '' && <Unit>{unit}</Unit>}
      {raw !== '' && <Raw dangerouslySetInnerHTML={{ __html: raw }}></Raw>}
    </Panel>
  )
}

Component.defaultProps = {
  number: ``,
  unit: ``,
  text: ``,
  note: ``,
  raw: ``,
}

Component.propTypes = {
  number: PropTypes.string,
  unit: PropTypes.string,
  text: PropTypes.string,
  note: PropTypes.string,
  raw: PropTypes.string,
}

export default Component
