import React from 'react'

export default function Divider(props) {
  const { fill } = props
  return (
    <svg
      width="321"
      height="14"
      viewBox="0 0 321 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="321" height="14" rx="7" fill={fill} />
    </svg>
  )
}
