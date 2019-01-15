import React from 'react'
import { string } from 'prop-types'
import Container from './Container'

import self from '../selfPhoto.jpg'
import flowerWave from '../flower-wave.png'
import resume from '../palomino-resume.pdf'
import Cta from './Cta'

About.propTypes = {
  text: string.isRequired,
}
export default function About(props) {
  const { text } = props
  return (
    <div>
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
          <h2>About</h2>
        </div>
        <div>
          <div css={{ position: 'relative' }}>
            <div
              css={{
                position: 'absolute',
                transform: 'translate(170px, 20px)',
                '::before': {
                  content: '""',
                  borderTop: '7px solid #000',
                  borderLeft: '7px solid #000',
                  width: 40,
                  height: 40,
                  left: -24,
                  top: -24,
                  position: 'absolute',
                  borderTopLeftRadius: 8,
                },
              }}
            >
              <img
                src={self}
                alt="self"
                css={{
                  opacity: '.45',
                  borderRadius: '8px',
                  height: 300,
                }}
              />
            </div>
          </div>
        </div>

        <p css={{ marginTop: '11rem', lineHeight: 1.5 }}>
          I have a combined 6 years in data analytics and software engineering. I started by
          understanding people’s shopping behaviors at Walmart to shaping experiences for people
          shopping online within the health and beauty world. I’ve designed and built apps, landing
          pages, websites, developer tools, emails and APIs.
        </p>
        <p>
          As a developer my enthusiasm lies in creating products that real people enjoy using. To do
          this, I come equipped with empathy grounded in user sensibilities, a persistent dedication
          towards producing better work and an easy going, ego-free approach towards my peers.
        </p>
        <p>
          I’m currently a full time member of The Hut Group’s engineering team. I also do freelance
          on the side with RenderCake.
        </p>
        <Cta src={resume} label="Check out my resume" />
      </Container>
      <img
        src={flowerWave}
        alt="flower wave"
        css={{
          '@media (min-width: 376px)': {
            display: 'none',
          },
        }}
      />
    </div>
  )
}
