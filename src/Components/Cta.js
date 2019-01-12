import React from 'react'

export default function Cta(props) {
  const { className } = props
  return (
    <a
      href="sms:385-394-7174"
      className={className}
      css={{
        ...className,
        cursor: 'pointer',
        borderRadius: 6,
        padding: '1rem 1.5rem',
        backgroundColor: '#F63A53',
        color: 'white',
        lineHeight: '1.3',
        fontSize: '0.87rem',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '.hero &': {
          display: 'none',
        },
      }}
      onClick={e => e.stopPropagation()}
    >
      Lets Talk
    </a>
  )
}
