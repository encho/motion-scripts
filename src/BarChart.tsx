import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
// import {Logo} from './HelloWorld/Logo';
// import {Subtitle} from './BarChart/Subtitle';
import {Title} from './BarChart/Title';
import {Bars} from './BarChart/Bars';
import theme from './themes';

export const BarChart: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

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
				<Sequence from={10}>
					<Title
						titleText={'of italians eat pizza'}
						titleColor={theme.colors.Title.text}
					/>
				</Sequence>
				<Sequence from={10}>
					<Bars />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
