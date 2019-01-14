import React, { Component } from 'react'
import { Router, Link, Head } from 'react-static'
import styled, { injectGlobal } from 'react-emotion'
import { hot } from 'react-hot-loader'
import { Transition, animated } from 'react-spring'

//
import Routes from 'react-static-routes'
import Footer from './Components/Footer'
import Container from './Components/Container'
import Logo from './Components/Logo'
import Cta from './Components/Cta'

injectGlobal`

  * {
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
  }
  
  body {
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,0.84
    )
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }
`

const AppStyles = styled.div`
  min-height: 100vh;
  a {
    text-decoration: none;
    font-weight: bold;
  }

  img {
    max-width: 100%;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.4;
  }

  h2: {
    font-size: 1.2rem;
  }

  p {
    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  }
`

const NavCta = styled(Cta)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`

function App() {
  return (
    <Router>
      <AppStyles>
        <Container>
          <div
            css={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              maxWidth: 1100,
              margin: 'auto',
            }}
          >
            <Logo />
            <div css={{ display: 'flex', alignItems: 'center' }}>
              <p
                css={{
                  fontSize: '.75rem',
                  borderTop: '5px solid #000',
                  '@media (min-width: 768px)': {
                    textAlign: 'right',
                    marginRight: '1rem',
                    width: 300,
                    fontSize: '1.2rem !important',
                  },
                }}
              >
                40°18'51.3"N 111°45'25.6"W
              </p>
              <NavCta />
            </div>
          </div>
        </Container>
        <Routes />
        <Footer />
      </AppStyles>
    </Router>
  )
}

export default hot(module)(App)
