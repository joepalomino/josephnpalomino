import React from 'react'
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const fill = '#000'
const marginRight = '1rem'
const fontSize = '2rem'
export default function Social(props) {
  return (
    <div>
      <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
        <FaTwitter css={{ fill, marginRight, fontSize }} />
        <FaInstagram css={{ fill, marginRight, fontSize }} />
        <FaGithub css={{ fill, marginRight, fontSize }} />
      </div>
    </div>
  )
}
