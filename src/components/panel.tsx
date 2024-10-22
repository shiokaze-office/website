import React from 'react'
import styled from 'styled-components'

const Panel = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto 1.5rem;
  padding: 0;
  border: 10px solid #cec0d9;
  border-top: 2px solid #cec0d9;
  text-align: center;
  color: #cec0d9;
  @media screen and (max-width:480px) {
    width: 90%;
  }
`
const Text = styled.span`
  font-size: var(--t3);
  font-family: 'Noto Sans JP', sans-serif;
  display: block;
  font-weight: bold;
  background-color: #cec0d9;
  color: #fff;
  padding: 0.5rem;
  text-align: center;
  line-height: 1.5;
`
const Note = styled.span`
  font-weight: bold;
  display: inline-block;
  line-height: 1.5;
  vertical-align: top;
  padding-top: 2rem;
  font-feature-settings: 'palt';
`
const Number = styled.span`
  font-family: 'Century Gothic', arial, 'Noto Sans JP', sans-serif;
  font-size: 8rem;
  font-weight: bold;
  display: inline-block;
  line-height: 1.5;
  letter-spacing: -0.3rem;
  @media screen and (max-width:480px) {
    font-size: 6rem;
  }
`
const Raw = styled.span`
  font-size: var(--t1);
  font-weight: bold;
  display: inline-block;
  line-height: 1.2;
  padding: 1rem 0;
  letter-spacing: 0.3rem;
`
const Unit = styled.span`
  font-weight: bold;
  display: inline-block;
  line-height: 1.5;
`

type Props = {
  number?: string
  unit?: string
  text?: string
  note?: string
  raw?: string
}

const Component: React.FC<Props> = ({ number, unit, text, note, raw }) => {
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

export default Component
