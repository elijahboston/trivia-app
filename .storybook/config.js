import * as React from 'react'
import { configure, addDecorator } from '@storybook/react'
import {Layout} from '../src/components'

addDecorator(storyFn =>
  <Layout>
    {storyFn()}
    <style jsx global>{`
      html {
        font-family: 'Open Sans', sans-serif;
        margin: 1rem;
        padding: 0;
      }
    `}</style>
  </Layout>)

configure(require.context('../src', true, /\.stories\.tsx$/), module)
