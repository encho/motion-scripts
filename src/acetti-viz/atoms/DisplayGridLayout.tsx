import React from 'react';
import {toPairs} from 'lodash';
import Svg from './Svg';
import Area from './Area';
import Title from './Title';
import {TGridLayoutArea} from '../types2';

type TDisplayGridLayoutProps = {
	width: number;
	height: number;
	areas: {[k: string]: TGridLayoutArea};
};

export default function DisplayGridLayout({
	width,
	height,
	areas,
}: TDisplayGridLayoutProps) {
	return (
		<div>
			{/* <h1>DisplayGridLayout</h1> */}
			<Svg width={width} height={height}>
				{toPairs(areas).map(([name, area]) => (
					<Area key={name} area={area} show>
						<Title area={area} text={name} />
					</Area>
				))}
			</Svg>
		</div>
	);
}
