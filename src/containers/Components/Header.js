import React from 'react'
import { string } from 'prop-types'
import Container from './Container'
import Triangle from './Triangle'
import Circle from './Circle'

Header.propTypes = {
  text: string.isRequired,
}
export default function Header(props) {
  const { text } = props
  return (
    <Container>
      <header css={{ marginBottom: '2rem', paddingTop: '3rem', position: 'relative' }}>
        <h1>{text}</h1>
        <div
          css={{
            position: 'absolute',
            zIndex: -2,
            right: 18,
            top: 140,
          }}
        >
          <Circle />
        </div>

        <div
          css={{
            position: 'absolute',
            right: -105,
            top: 160,
            zIndex: -1,
          }}
        >
          <Triangle />
        </div>
      </header>
    </Container>
  )
}
