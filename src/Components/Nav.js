import React from 'react'
import Container from './Container'
import styled from 'react-emotion'
import Cta from './Cta'

const UnderListItem = styled.div`
  margin-right: 1rem;
  border-bottom: 4px solid #f63a53;
  font-weight: bold;
  cursor: pointer;
`
export default function Nav(props) {
  const { className } = props
  const handleNavClick = (e) => {
    console.log(e)

    e.stopPropagation()
    props.onNavClick(parseInt(e.target.attributes.rel.value))
  }
  return (
    <Container css={{ paddingBottom: '2rem' }}>
      <nav>
        <ul css={{ display: 'flex', flexWrap: 'wrap' }}>
          <UnderListItem onClick={handleNavClick} rel="2">
            About
          </UnderListItem>
          <UnderListItem onClick={handleNavClick} rel="1" css={{ marginRight: '3.5rem' }}>
            Skills
          </UnderListItem>
          <li>
            <Cta />
          </li>
        </ul>
      </nav>
    </Container>
  )
}
