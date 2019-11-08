import * as React from 'react'
import { configure, addDecorator } from '@storybook/react'
import globalStyle from '../src/styles/global'

addDecorator(storyFn =>
  <React.Fragment>
    {storyFn()}
    <style jsx global>{globalStyle}</style>
  </React.Fragment>)

configure(require.context('../src', true, /\.stories\.tsx$/), module)
