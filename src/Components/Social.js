import React from 'react'
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const fill = '#000'
const marginRight = '1rem'
const fontSize = '2rem'
export default function Social(props) {
  return (
    <div>
      <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
        <a href="https://twitter.com/joenpalomino" onClick={e => e.stopPropagation()}>
          <FaTwitter css={{ fill, marginRight, fontSize }} onClick={e => e.stopPropagation()} />
        </a>
        <a href="https://www.instagram.com/joe_pal/">
          <FaInstagram css={{ fill, marginRight, fontSize }} onClick={e => e.stopPropagation()} />
        </a>
        <a href="https://github.com/joepalomino">
          <FaGithub css={{ fill, marginRight, fontSize }} onClick={e => e.stopPropagation()} />
        </a>
      </div>
    </div>
  )
}
