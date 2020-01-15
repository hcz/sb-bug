import {addDecorator, configure} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

addDecorator(withKnobs);

const context = require.context('../examples', true, /\.examples\.tsx?$/);

configure(function() {
		context.keys().forEach(filename => context(filename));
}, module);
