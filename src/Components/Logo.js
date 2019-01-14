import React from 'react'

export default function Logo(props) {
  return (
    <svg
      css={{ width: 65 }}
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 250 300"
    >
      <path d="M 107 67 L 174 0 L 174 203 L 107 270 Z" fill="#333333" />
      <path
        d="M 107 67 C 107 29.997 136.997 0 174 0 L 174 134 C 136.997 134 107 104.003 107 67 Z"
        fill="#333333"
      />
      <path
        d="M 174 203 C 174 240.003 144.003 270 107 270 L 107 136 C 144.003 136 174 165.997 174 203 Z"
        fill="#333333"
      />
      <path
        d="M 97 270 L 0.042 270 C 0.014 269.037 0 268.071 0 267.101 C 0 213.474 43.428 170 97 170 Z"
        fill="#333333"
      />
      <path
        d="M 251 67 C 251 104.003 221.003 134 184 134 L 184 0 C 221.003 0 251 29.997 251 67 Z"
        fill="#333"
      />
    </svg>
  )
}
