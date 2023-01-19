import React from 'react'
import { TGridLayoutArea } from '../types2'

type TTitleProps = {
  area: TGridLayoutArea
  text: string
}

export default function Title({ area, text }: TTitleProps) {
  const color = 'cyan'
  return (
    <text
      x={area.width / 2}
      y={area.height / 2}
      color={color}
      style={{
        dominantBaseline: 'central',
        textAnchor: 'middle',
        fill: 'green',
        stroke: 'none',
        fontSize: '16px',
      }}
    >
      {text}
    </text>
  )
}
