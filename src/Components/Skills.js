import React from 'react'
import { array } from 'prop-types'
import Divider from './Divider'
import Container from './Container'

import flower from '../flower.jpg'
import styled from 'react-emotion'

Skills.propTypes = {
  list: array.isRequired,
}

const ChartBar = styled.div`
  width: 36px;
  background: #f63a53;
  border-radius: 6px;
  height: ${props => props.height};
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 56px;
  }
`

const BarDivider = styled.div`
  width: 90%;
  height: 7px;
  background: #000;
  margin: 0.5rem 0;
  position: relative;
  ::before {
    content: '';
    border-top: 7px solid #000;
    border-right: 7px solid #000;
    width: 40px;
    height: 40px;
    right: -37px;
    position: absolute;
    border-top-right-radius: 8px;
  }
`
export default function Skills(props) {
  const { topList, bottomList } = props
  return (
    <section>
      <Container css={{ paddingTop: '3.4rem', maxWidth: 1100, margin: 'auto' }}>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <div
            css={{
              display: 'inline-block',
              width: '1rem',
              height: '1.6rem',
              backgroundColor: 'black',
            }}
          />
          <h2>Skills</h2>
        </div>
        <p css={{ marginTop: 0, marginBottom: '2.5rem' }}>
          "Don't ask what the world can offer you, but what can you offer the world?"{' '}
        </p>
        <div css={{ maxWidth: 800, margin: 'auto' }}>
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gridGap: '1rem',
              justifyItems: 'center',
              marginTop: '1rem',
            }}
          >
            {topList.map(({ skill, experience }) => (
              <div key={skill}>
                <div
                  css={{
                    height: 100,
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'flex-end',
                    '@media (min-width: 768px)': {
                      height: 150,
                    },
                  }}
                >
                  <ChartBar height={`${experience}%`} />
                </div>
                <div>{skill}</div>
              </div>
            ))}
          </div>
          <BarDivider />
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gridGap: '1rem',
              justifyItems: 'center',
            }}
          >
            {bottomList.map(({ skill, experience }) => (
              <div key={skill}>
                <div>{skill}</div>
                <div
                  css={{
                    height: 100,
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    '@media (min-width: 768px)': {
                      height: 150,
                    },
                  }}
                >
                  <ChartBar height={`${experience}%`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
