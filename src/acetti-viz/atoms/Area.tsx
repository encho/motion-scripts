import React, { ReactNode } from "react";
import { TGridLayoutArea } from "../types2";
import config from "../config";

//
type TAreaProps = {
  area: TGridLayoutArea;
  children: ReactNode;
  fill?: string;
  stroke?: string;
  show?: boolean;
};

export default function Area({
  children,
  area,
  fill,
  stroke,
  show = false,
  ...props
}: TAreaProps) {
  return (
    <g {...props} transform={`translate(${area.x1} ${area.y1})`}>
      <AreaRect
        show={config.debug || show}
        // show={true}
        area={area}
        fill={fill}
        stroke={stroke}
      />
      {children}
    </g>
  );
}

function AreaRect({
  area,
  fill,
  stroke,
  show,
}: {
  show?: boolean;
  fill?: string;
  stroke?: string;
  area: TGridLayoutArea;
}) {
  const strokeColor = stroke
    ? stroke
    : show
    ? "rgba(255,0,255,0.3)"
    : "transparent";
  const fillColor = fill ? fill : show ? "rgba(255,0,255,0.05)" : "transparent";

  return (
    <rect
      stroke={strokeColor}
      fill={fillColor}
      x={0}
      y={0}
      width={area.width}
      height={area.height}
    />
  );
}

export function HtmlArea({
  children,
  area,
  fill,
  stroke,
  show = false,
  ...props
}: TAreaProps) {
  return (
    <div
      className="absolute bg-blue-700 bg-opacity-30"
      style={{
        width: area.width,
        height: area.height,
        top: area.y1,
        left: area.x1,
      }}
    ></div>
  );
}
