import React from 'react'
import styled from 'styled-components'
import Button from '../button'

type Props = {
  tags?: string[]
}

const Component: React.FC<Props> = ({ tags, children }) => {
  return (
     <Container>
       {tags !== null && (
         <Meta>
           <p>Tags:</p>
           <ul>
             {tags.map(tag => (
               <li key={tag}>
                 <Button href="/" size="small" bare="true">{tag}</Button>
               </li>
             ))}
           </ul>
         </Meta>
       )}
     </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr 22rem;
  margin: 4rem var(--gutter);
`
const Meta = styled.div`
  grid-column: 2 / 3;
  grid-row: 1;
  max-width: 760px;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: 4rem 1fr;
  align-items: end;
  p {
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    color: #999;
  }
  ul {
    margin: 0;
    padding: 0;
    display: inline-block;
    list-style-type: none;
  }
  li {
    font-size: 1rem;
    margin: 0 0 0 1rem;
    padding: 0;
    display: inline-block;
  }
`

export default Component
