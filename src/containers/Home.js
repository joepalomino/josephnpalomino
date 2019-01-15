import React, { Component } from 'react'
import { Transition, animated } from 'react-spring'
import { FaCircle } from 'react-icons/fa'
//
import Skills from '../Components/Skills'
import About from '../Components/About'

import Hero from '../Components/Hero'

const skillsList = [
  { skill: 'Frontend', experience: 100 },
  { skill: 'Backend', experience: 75 },
  { skill: 'UI/UX', experience: 90 },
  { skill: 'Databases', experience: 50 },
]

const testScreens = [
  { comp: Hero, props: {} },
  {
    comp: Skills,
    props: {
      topList: skillsList,
      bottomList: [
        { skill: 'React', experience: 100 },
        { skill: 'Node', experience: 80 },
        { skill: 'GraphQl', experience: 65 },
        { skill: 'PHP', experience: 70 },
      ],
    },
  },
  {
    comp: About,
    props: {
      text:
        'I have a combined 6 years in data analytics and software engineering.\n\n I started by understanding people’s shopping behaviors at Walmart to shaping experiences for  people shopping online within the health and beauty world. I’ve designed and built apps, landing pages, websites, developer tools, emails and APIs. As a developer my enthusiasm lies in creating products that real people enjoy using. To do this, I come equipped with empathy grounded in user sensibilities, a persistent dedication towards producing better work and an easy going, ego-free approach towards my peers. I’m currently a full time member of The Hut Group’s engineering team. I also do freelance on the side with RenderCake.',
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
            position: 'relative',
            cursor: 'pointer',
            width: '100%',
            height: this.state.index === 0 ? 685 : this.state.index === 1 ? 600 : 920,
            '@media (min-width: 768px)': {
              height: 650,
            },
            '&>div': {
              willChange: 'transorm, opacity',
              position: 'absolute',
              width: '100%',
              height: '100%',
            },
          }}
          onClick={this.toggleScreen}
          role="button"
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
