import React from 'react'

export default function Cta(props) {
  const { className, label, src } = props
  return (
    <a
      href={src}
      className={className}
      css={{
        ...className,
        cursor: 'pointer',
        borderRadius: 6,
        padding: '1rem .9rem',
        backgroundColor: '#F63A53',
        color: 'white',
        lineHeight: '1.3',
        fontSize: '0.87rem',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '.hero &': {
          display: 'none',
        },
        '@media (min-width: 375px)': {
          padding: '1rem 1.5rem',
        },
      }}
      onClick={e => e.stopPropagation()}
    >
      {label}
    </a>
  )
}
