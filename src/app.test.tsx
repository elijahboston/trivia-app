import * as React from 'react';
import { default as test } from 'ava';
import { shallow } from 'enzyme';
import App from './app';

test('<App /> renders', t => {
	const wrapper = shallow(<App />);

	t.is(wrapper.find('.app').length, 1, 'Component did not render');
});