import {ReactNode} from 'react';

import theme from '../../themes';

type TSvgProps = {
	height?: number;
	width?: number;
	children: ReactNode;
	style?: Object;
};

export default function Svg({width, height, children, style = {}}: TSvgProps) {
	const defaultStrokeColor = theme.colors.Svg.debugStrokeColor;

	const debugStyle = {border: `1px solid ${defaultStrokeColor}`};

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
	);
}
