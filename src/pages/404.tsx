import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Button from '../components/button'

const Component: React.FC = () => (
  <Layout>
    <Container>
      <div>
        <StatusNumber>404</StatusNumber>
        <Title>Page Not Found</Title>
        <Description>😞 お探しのページはありません。</Description>
        <Button href="/">トップページへ</Button>
      </div>
    </Container>
  </Layout>
)

const Container = styled.section`
  margin: var(--gutter) 0;
  display: grid;
  grid-template-columns: repeat(22rem, 1fr, 22rem);
  div {
    margin: var(--gutter);
    grid-column: 2;
  }
`
const Title = styled.h1`
  margin: 0 0 2rem;
  padding: 0;
`
const Description = styled.p`
  margin: 0 0 2rem;
`
const StatusNumber = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #aaa;
  line-height: 1;
  margin: 0;
  padding: 0;
`

export default Component
