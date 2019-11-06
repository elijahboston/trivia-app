import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';

const stories = storiesOf('Button', module);
stories.add('with text', () =>
  <Button
    primaryColor='#ccc'
    secondaryColor='#ddd'
    onClick={action('clicked')}>
      Hello Button
  </Button>);

stories.add('with text and icon', () =>
  <Button
    primaryColor='#ccc'
    secondaryColor='#ddd'
    onClick={action('clicked')}>
      <span>💯</span><span>Some text</span>
  </Button>);
