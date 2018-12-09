import React from 'react'
import { array } from 'prop-types'
import Divider from './Divider'
import Container from './Container'

Skills.propTypes = {
  list: array.isRequired,
}
export default function Skills(props) {
  const { list } = props
  return (
    <section>
      <Divider fill="#ECF2F9" />
      <Container css={{ paddingTop: '3.4rem', paddingBottom: '3.4rem' }}>
        <h2>Skills</h2>
        <ul css={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridGap: '1rem' }}>
          {list.map(listItem => (
            <div key={listItem}>
              <li css={{ borderBottom: '2px solid #E5E5E5', display: 'inline-block' }}>
                {listItem}
              </li>
            </div>
          ))}
        </ul>
      </Container>
    </section>
  )
}
