import React from 'react';
import {storiesOf} from '@storybook/react';
import {select} from '@storybook/addon-knobs';

type Props = {
	height?: string;
	width?: string;
}

const Example = ({height, width}: Props) => (
	<div>
		{`${height} - ${width}`}
	</div>
);

storiesOf('Example', module)
	.add('sample', () => (
		<Example
			height='s'
			width={'m'}
		/>
	))

	.add('fails', () => {
		// Group name contains dot
		const GROUP_NAME = 'Group.Name';

		const sizes = ['s', 'm', 'l'];
		// Two knobs use the same source
		const width: string | undefined = select('width', sizes, sizes[0], GROUP_NAME);
		const height: string | undefined = select('height', sizes, sizes[0], GROUP_NAME);

		return (
			<Example
				width={width}
				height={height}
			/>
		)
	});
