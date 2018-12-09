import React from 'react'
import { withSiteData } from 'react-static'

import Header from './Components/Header'
import Nav from './Components/Nav'
//
import logoImg from '../logo.png'
import Skills from './Components/Skills'
import About from './Components/About'
import Divider from './Components/Divider'

export default withSiteData(() => (
  <main>
    <Header text="I’m Joe, Some catchy subline that will help me convey everything that help people get a feel for who I am and what I do" />
    <Nav />
    <Skills
      list={['UX/UI', 'Frontend', 'Backend', 'React', 'Vanilla Js', 'APIs', 'Node', 'PHP', 'DB']}
    />
    <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Divider fill="#F9ECEC" />
    </div>
    <section css={{ padding: '3.4rem 0' }}>
      <About text="I’m Joe, Some catchy subline that will help me convey everything that help people get a feel for who I am and what I do. I’m Joe, Some catchy subline that will help me convey everything that help people get a feel for who I am and what I do" />
    </section>
  </main>
))
