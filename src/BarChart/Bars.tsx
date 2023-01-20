import React from 'react';
import {
	interpolate,
	useCurrentFrame,
	Sequence,
	spring,
	useVideoConfig,
} from 'remotion';
import numeral from 'numeral';
import {scaleLinear} from '@visx/scale';
import {COLOR_1, FONT_FAMILY} from './constants';
import theme from '../themes';

type Area = {
	x1: number;
	// x2: number;
	y1: number;
	// y2: number;
	width: number;
	height: number;
};

const barsArea = {
	x1: 700,
	// x2: 220,
	width: 500,
	y1: 300,
	// y2: 120,
	// height: 700,
	height: 400,
};
const barsAreaCSS: React.CSSProperties = {
	position: 'absolute',
	top: barsArea.y1,
	left: barsArea.x1,
	width: barsArea.width,
	height: barsArea.height,
};

export const Bars: React.FC = () => {
	const value = 32;

	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 10], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const {fps, width} = useVideoConfig();

	// Animate from 0 to 1 after 10 frames
	const heightFactor = spring({
		frame: frame - 10,
		fps,
		durationInFrames: 20,
	});

	const valueTextOpacity = spring({
		frame: frame - 10,
		fps,
		durationInFrames: 40,
	});

	const maxBarColor = theme.colors.BarChart.railBackground;
	const valueBarColor = theme.colors.BarChart.barFill;
	const valueTextColor = theme.colors.BarChart.valueText;

	const yExtent = [0, barsArea.height];

	const valueScale = scaleLinear({
		domain: [0, 100],
		range: yExtent,
	});

	const currentDisplayValue = heightFactor * value;

	const minMapped = valueScale(0);
	const maxMapped = valueScale(100);

	const bigBarHeight = maxMapped - minMapped;

	const currentDisplayValueMapped = valueScale(currentDisplayValue);
	const valueBarHeight = currentDisplayValueMapped - minMapped;

	const horizontalPaddingInnerBar = 0.1;
	const paddingLeft = barsArea.width * 0.5 * horizontalPaddingInnerBar;

	return (
		<div>
			<div
				style={{
					paddingTop: 140,
					display: 'flex',
					justifyContent: 'center',
					width,
				}}
			>
				<div
					style={{
						fontFamily: FONT_FAMILY,
						fontSize: 130,
						fontWeight: 800,
						opacity: valueTextOpacity,
						color: valueTextColor,
					}}
				>
					{formatPercentage({amount: currentDisplayValue / 100})}
				</div>
			</div>
			<div style={{...barsAreaCSS, opacity}}>
				<div style={{position: 'relative'}}>
					<div
						style={{
							top: 0,
							width: barsArea.width,
							backgroundColor: maxBarColor,
							height: bigBarHeight,
							position: 'absolute',
						}}
					/>
					<Sequence from={10}>
						<div
							style={{
								top: maxMapped - valueBarHeight,
								left: paddingLeft,
								width: barsArea.width * (1 - horizontalPaddingInnerBar),
								backgroundColor: valueBarColor,
								height: valueBarHeight,
								position: 'absolute',
							}}
						/>
					</Sequence>
				</div>
			</div>
		</div>
	);
};

export function formatPercentage({
	amount,
	decimals = 2,
	withSign = false,
}: {
	amount?: number;
	decimals?: number;
	withSign?: boolean;
}) {
	if (amount === null || amount === undefined) {
		return 'NaN';
	}

	const fmtStrings = ['0,0%', '0,0.0%', '0,0.00%', '0,0.000%', '0,0.0000%'];
	const fmtString = fmtStrings[decimals];

	const formattedAmount = numeral(amount).format(fmtString);
	const signPrefix = withSign ? (amount > 0 ? '+' : '') : '';

	return `${signPrefix}${formattedAmount}`;
}
