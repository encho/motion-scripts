import {ReactNode} from 'react';
import {TGridLayoutArea} from '../types2';
import config from '../config';
import theme from '../../themes';

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
	const defaultStrokeColor = theme.colors.Area.debugStrokeColor;
	const defaultFillColor = theme.colors.Area.debugFillColor;
	// const defaultStrokeColor = 'hsla(9, 100%, 64%, 0.6)';
	// const defaultFillColor = 'hsla(9, 100%, 64%, 0.12)';

	const strokeColor = stroke
		? stroke
		: show
		? defaultStrokeColor
		: 'transparent';
	const fillColor = fill ? fill : show ? defaultFillColor : 'transparent';

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
