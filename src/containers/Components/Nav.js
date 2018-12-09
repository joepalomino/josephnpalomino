import React from 'react'
import Container from './Container'
import styled from 'react-emotion'

const UnderListItem = styled.div`
  margin-right: 0.5rem;
  border-bottom: 3px solid #e5e5e5;
  font-weight: bold;
`
export default function Nav(props) {
  return (
    <Container css={{ paddingBottom: '7rem' }}>
      <nav>
        <ul css={{ display: 'flex', flexWrap: 'wrap' }}>
          <UnderListItem>About</UnderListItem>
          <UnderListItem>Skills</UnderListItem>
          <li css={{ paddingLeft: '.7rem' }}>palominojoen@gmail.com</li>
        </ul>
      </nav>
    </Container>
  )
}
