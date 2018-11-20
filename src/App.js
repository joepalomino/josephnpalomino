import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'react-emotion'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

injectGlobal`

  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Merriweather', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,0.84
    )
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
    background: #108db8;

    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }

  .content {
    padding: 1rem;
  }

  img {
    max-width: 100%;
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
        className="content"
      >
        <div>
          <h1 css={{ fontSize: '4.5rem' }}>Joseph N. Palomino</h1>
          <p css={{ fontFamily: 'lato' }}>
            Passionate about making software that people enjoy using
          </p>
          <a href="mailto:palominojoen@gmail.com">palominojoen@gmail.com</a>
        </div>
      </div>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
