import React from 'react'
import styled from 'styled-components'

type Props = {
  titleName: string
  title: string
  descName: string
  desc: string
}

const Component: React.FC<Props> = ({ titleName, title, descName, desc, children }) => {
  return (
     <Container>
       <Title>
         <Label>{titleName}</Label>
         <h1>{title}</h1>
       </Title>
       <Desc>
         <Label>{descName}</Label>
         <p>{desc}</p>
       </Desc>
     </Container>
  )
}

const Container = styled.div`
  margin: 6rem 1rem 4rem;
  padding: 1rem 0;
`
const Label = styled.div`
  margin: 0 0 0 var(--gutter);
  padding: 0;
  position: absolute;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: #ccc;
  font-weight: bold;
  font-family: 'Noto Sans JP', sans-serif;
  @media screen and (max-width:480px) {
    display: none;
  }
`
const Title = styled.div`
  h1 {
    font-size: var(--t1);
    margin: 0 auto;
    padding: 0 0 5rem;
    max-width: 53.75rem;
    line-height: 1.2;
  }
`
const Desc = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr 22rem;
  p {
    grid-column: 2 / 3;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 var(--gutter);
  }
  @media screen and (max-width:480px) {
    grid-template-columns: 1fr;
  }
`

export default Component
