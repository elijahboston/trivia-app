import * as React from 'react'
import { configure, addDecorator } from '@storybook/react'
import {Layout} from '../src/components'

addDecorator(storyFn =>
  <React.Fragment>
    {storyFn()}
    <style jsx global>{`
      html {
        font-family: 'Open Sans', sans-serif;
        margin: 1rem;
        padding: 0;
      }
    `}</style>
  </React.Fragment>)

configure(require.context('../src', true, /\.stories\.tsx$/), module)
