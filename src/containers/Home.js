import React, { Component } from 'react'
import { Transition, animated } from 'react-spring'

import Header from '../Components/Header'
import Nav from '../Components/Nav'
//
import Skills from '../Components/Skills'
import About from '../Components/About'
import Divider from '../Components/Divider'
import styled from 'react-emotion'
import { FaCircle } from 'react-icons/fa'
import Hero from '../Components/Hero'
import flower from '../flower.jpg'

const skillsList = [
  { skill: 'Frontend', experience: 100 },
  { skill: 'Backend', experience: 75 },
  { skill: 'UI/UX', experience: 90 },
  { skill: 'Databases', experience: 50 },
]

const screens = [
  style => (
    <animated.div style={{ ...style }}>
      <Hero />
    </animated.div>
  ),

  style => (
    <animated.div style={{ ...style }}>
      <Skills
        list={[
          'Frontend',
          'UX/UI',
          'Backend',
          'React',
          'Vanila',
          'APIs',
          'Node',
          'PHP',
          'CSS',
          'Mysql',
          'GraphQl',
        ]}
      />
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }}>
      <About text="I’m Joe, Some catchy subline that will help me convey everything that help people get a feel for who I am and what I do. I’m Joe, Some catchy subline that will help me convey everything that help people get a feel for who I am and what I do" />
    </animated.div>
  ),
]

const testScreens = [
  { comp: Hero, props: {} },
  { comp: Skills, props: { list: skillsList } },
  {
    comp: About,
    props: {
      text:
        'I’m Joe, Some catchy subline that will help me convey everything that help people get a feel for who I am and what I do. I’m Joe, Some catchy subline that will help me convey everything that help people get a feel for who I am and what I do',
    },
  },
]
export default class Home extends Component {
  state = { index: 0 }

  onNavClick = indexToGoTo => this.setState({ index: indexToGoTo })
  toggleScreen = e => this.setState(state => ({ index: state.index === 2 ? 0 : state.index + 1 }))

  render() {
    return (
      <div>
        <div
          css={{
            height: 'calc(100% - 38px)',
            position: 'relative',
            width: '100%',
            height: 600,
            '&>div': {
              willChange: 'transorm, opacity',
              position: 'absolute',
              width: '100%',
              height: '100%',
            },
          }}
          onClick={this.toggleScreen}
        >
          <Transition
            native
            reset
            unique
            items={this.state.index}
            from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
          >
            {index => style => (
              <animated.div style={{ ...style }}>
                {React.createElement(testScreens[index].comp, {
                  onNavClick: this.onNavClick,
                  ...testScreens[index].props,
                })}
              </animated.div>
            )}
          </Transition>
        </div>
        <div css={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <FaCircle
            css={{ margin: '.5rem', color: this.state.index === 0 ? 'black' : '#C4C4C4' }}
          />
          <FaCircle
            css={{ margin: '.5rem', color: this.state.index === 1 ? 'black' : '#C4C4C4' }}
          />
          <FaCircle
            css={{ margin: '.5rem', color: this.state.index === 2 ? 'black' : '#C4C4C4' }}
          />
        </div>
      </div>
    )
  }
}
