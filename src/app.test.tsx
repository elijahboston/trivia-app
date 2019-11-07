import * as React from 'react'
import { default as test } from 'ava'
import { mount } from 'enzyme'
import App from './app'

test('<App /> renders', t => {
	const wrapper = mount(<App />)

	t.is(wrapper.find('.layout').length, 1, 'Component did not render')
});