import React from 'react'
import { string } from 'prop-types'
import Container from './Container'

About.propTypes = {
  text: string.isRequired,
}
export default function About(props) {
  const { text } = props
  return (
    <Container>
      <h2>About</h2>
      <p>{text}</p>
    </Container>
  )
}
