import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {BarChart} from './BarChart';
import {GridDemo} from './GridDemo';
import {Logo} from './HelloWorld/Logo';

// Each <Composition> is an entry in the sidebar!

const verticalVideo = {
	height: 1920,
	width: 1080,
};

const horizontalVideo = {
	width: 1920,
	height: 1080,
};

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="GridDemo"
				component={GridDemo}
				durationInFrames={150}
				fps={30}
				{...horizontalVideo}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					titleText: 'Welcome to Remotion',
					percentageText: '88.8',
				}}
			/>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="BarChart"
				component={BarChart}
				durationInFrames={150}
				fps={30}
				{...horizontalVideo}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				// width={1920}
				// height={1080}
				width={verticalVideo.width}
				height={verticalVideo.height}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			{/* Mount any React component to make it show up in the sidebar and work on it individually! */}
			<Composition
				id="OnlyLogo"
				component={Logo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
