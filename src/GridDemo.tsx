import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import {
	useGridLayout,
	TGridLayoutAreaSpec,
	TGridRailSpec,
	DisplayGridLayout,
} from './acetti-viz';

import theme from './themes';

export const GridDemo: React.FC<{
	titleText: string;
	percentageText: string;
}> = ({titleText, percentageText}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps, width, height} = useVideoConfig();

	const rowsRailSpec: TGridRailSpec = [
		{type: 'pixel', value: 75, name: 'topPadding'},
		{type: 'pixel', value: 130, name: 'title'},
		{type: 'pixel', value: 50, name: 'bodyTopMargin'},
		{type: 'fr', value: 1, name: 'body'},
		{type: 'pixel', value: 75, name: 'bottomPadding'},
	];
	const colsRailSpec: TGridRailSpec = [
		{type: 'pixel', value: 50, name: 'leftPadding'},
		{type: 'fr', value: 1, name: 'body'},
		{type: 'pixel', value: 50, name: 'rightPadding'},
	];

	const gridLayoutSpec = {
		padding: 0,
		columnGap: 0,
		rowGap: 0,
		rows: rowsRailSpec,
		columns: colsRailSpec,
		areas: {
			title: [
				{name: 'title'},
				{name: 'body'},
				{name: 'title'},
				{name: 'body'},
			] as TGridLayoutAreaSpec,
			body: [
				{name: 'body'},
				{name: 'body'},
				{name: 'body'},
				{name: 'body'},
			] as TGridLayoutAreaSpec,
		},
	};

	const layout = useGridLayout({width, height, gridLayoutSpec});

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: theme.colors.Slide.background}}>
			<AbsoluteFill style={{opacity}}>
				<DisplayGridLayout
					width={layout.width}
					height={layout.height}
					areas={layout.areas}
				/>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
