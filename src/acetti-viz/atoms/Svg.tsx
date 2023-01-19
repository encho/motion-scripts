import React, { ReactNode } from 'react'

type TSvgProps = {
  height?: number
  width?: number
  children: ReactNode
  style?: Object
}

export default function Svg({
  width,
  height,
  children,
  style = {},
}: TSvgProps) {
  const debugStyle = { border: `1px solid ${'cyan'}` }

  return (
    <svg
      width={width}
      height={height}
      style={{
        display: 'block',
        overflow: 'visible',
        ...debugStyle,
        ...style,
      }}
    >
      {children}
    </svg>
  )
}
