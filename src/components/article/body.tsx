import React from 'react'
import styled from 'styled-components'

type Props = {
}

const Component: React.FC<Props> = ({ children }) => {
  return (
     <Container>
       {children}
     </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr 22rem;
  margin: 0 var(--gutter);
  padding: 0;
  > div {
    grid-column: 2 / 3;
    grid-row: 1;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 var(--gutter);
  }
  h2 {
    padding-top: 2rem;
  }
  h3 {
    padding-top: 1.2rem;
  }
`

export default Component
