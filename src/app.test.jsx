import React from 'react';
import test from 'ava';
import App from './app';
import { shallow } from 'enzyme';

test('<App /> renders', t => {
	const wrapper = shallow(<App />);

	t.is(wrapper.find('.app').length, 1, 'Component did not render');
});