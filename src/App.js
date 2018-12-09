import React from 'react'
import { Router, Link, Head } from 'react-static'
import styled, { injectGlobal } from 'react-emotion'
import { hot } from 'react-hot-loader'

//
import Routes from 'react-static-routes'
import Footer from './containers/Components/Footer'
import Container from './containers/Components/Container'

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
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  nav {
    width: 100%;

    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }

  img {
    max-width: 100%;
  }

  h1 {
    font-size: 1.65rem;
    line-height: 1.4;
  }

  h2: {
    font-size: 1.2rem;
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <Container>
        <p>logo</p>
      </Container>
      <Routes />
      <Footer />
    </AppStyles>
  </Router>
)

export default hot(module)(App)
