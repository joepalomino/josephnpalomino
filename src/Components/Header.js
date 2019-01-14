import React from 'react'
import { string } from 'prop-types'
import Container from './Container'
import Triangle from './Triangle'
import Circle from './Circle'
import flower from '../flower.jpg'
import Social from './Social'
import Nav from './Nav'

Header.propTypes = {
  text: string.isRequired,
}

export default function Header(props) {
  const { text } = props
  return (
    <header css={{ marginBottom: '5rem', paddingTop: '3rem', position: 'relative' }}>
      <div
        css={{
          transform: 'translate(-40px, 40px)',
          position: 'absolute',
          '@media (min-width: 768px)': {
            transform: 'rotate(90deg)',
            top: -40,
            right: 90,
          },
        }}
      >
        <img
          src={flower}
          alt="flower-background"
          css={{
            borderRadius: '10px',
            height: 426,
            opacity: '.25',
            '@media (min-width: 768px)': {
              width: 400,
              height: 656,
            },
          }}
        />
      </div>
      <div
        css={{
          border: '7px solid #000',
          paddingLeft: '1.5rem',
          paddingBottom: '1.5rem',
          borderRadius: 10,
          position: 'relative',
          transform: 'translate(-10px, 0)',
          maxWidth: 300,
          '@media (min-width: 768px)': {
            width: 656,
            height: 400,
            maxWidth: 656,
          },
          '::before': {
            content: '""',
            borderTop: '7px solid #000',
            borderRight: '7px solid #000',
            width: 40,
            height: 40,
            right: -24,
            top: -24,
            position: 'absolute',
            borderTopRightRadius: 8,
          },
        }}
      >
        <h1
          css={{
            marginTop: '5rem',
            '@media (min-width: 768px)': {
              fontSize: '2.1rem !important',
            },
          }}
        >
          {text}
        </h1>
        <div
          className="hero"
          css={{
            '@media (min-width: 768px)': {
              display: 'flex',
              justifyContent: 'flex-end',
            },
          }}
        >
          <div
            css={{
              display: 'none',
              '@media (min-width: 768px)': {
                display: 'flex',
              },
            }}
          >
            <Nav onNavClick={props.onNavClick} />
          </div>

          <p
            css={{
              textAlign: 'right',
              margin: '2rem 1rem',
              fontWeight: 900,
              '@media (min-width: 768px)': {
                margin: '0 1rem 0 0',
              },
            }}
          >
            palominojoen@gmail.com
          </p>
        </div>
        <Social />
      </div>
    </header>
  )
}
