import React from 'react'
import Container from './Container'

export default function Footer(props) {
  return (
    <footer css={{
 position: 'absolute', bottom: 0, right: 0, left: 0,
}}
    >
      <Container>
        <div css={{ display: 'flex', justifyContent: 'space-between', color: '#C4C4C4' }}>
          <p css={{ fontSize: '.75rem' }}>&copy; 2018 - Joseph N. Palomino</p>
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </div>
      </Container>
    </footer>
  )
}
