import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
// import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './BarChart/Subtitle';
import {Title} from './BarChart/Title';
import {Bars} from './BarChart/Bars';

export const BarChart: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Animate from 0 to 1 after 25 frames
	const logoTranslationProgress = spring({
		frame: frame - 25,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	// const logoTranslation = interpolate(
	// 	logoTranslationProgress,
	// 	[0, 1],
	// 	[0, -150]
	// );

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
		// <AbsoluteFill style={{backgroundColor: 'transparent'}}>
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<AbsoluteFill style={{opacity}}>
				{/* <AbsoluteFill style={{transform: `translateY(${logoTranslation}px)`}}>
					<Logo />
				</AbsoluteFill> */}
				{/* Sequences can shift the time for its children! */}
				{/* <Sequence from={35}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence> */}
				<Sequence from={10}>
					<Title titleText={'of italians eat pizza'} titleColor={titleColor} />
				</Sequence>
				<Sequence from={10}>
					<Bars />
					{/* <Title titleText={'of Italians eat pizza'} titleColor={titleColor} /> */}
				</Sequence>
				{/* The subtitle will only enter on the 75th frame. */}
				{/* <Sequence from={75}>
					<Subtitle />
				</Sequence> */}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};