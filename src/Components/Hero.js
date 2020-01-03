import styled from 'react-emotion'
import { FaCircle } from 'react-icons/fa'

import React from 'react'
import Header from './Header'
import Nav from './Nav'

const RotatedText = styled.div`
  transform: rotate(-90deg);
  margin-right: -20px;
`
export default function Hero(props) {
  return (
    <section>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          '@media (min-width: 768px)': {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          },
        }}
      >
        <div>
          <Header
            text="I’m Joe, a multidisciplinary developer in Bentonville AR. I help companies and entrepreneurs build digital experiences their users enjoy."
            onNavClick={props.onNavClick}
          />
          <div
            css={{
              '@media (min-width: 768px)': {
                display: 'none',
              },
            }}
          >
            <Nav onNavClick={props.onNavClick} />
          </div>
        </div>

        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: '0 1',
            maxHeight: 560,
            '@media (min-width: 768px)': {
              flexDirection: 'row',
              width: '100%',
              maxWidth: 1100,
              position: 'absolute',
              zIndex: -1,
            },
          }}
        >
          <RotatedText>Developer</RotatedText>
          <RotatedText>Designer</RotatedText>
        </div>
      </div>
    </section>
  )
}
