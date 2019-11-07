import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';
import Icon from './icon';

const stories = storiesOf('Button', module);
stories.add('with text', () =>
  <Button
    primaryColor='#8EC5FC'
    secondaryColor='#E0C3FC'
    onClick={action('clicked')}>
      Hello Button
  </Button>);

stories.add('with text and icon', () =>
  <Button
    primaryColor='#ccc'
    secondaryColor='#ddd'
    onClick={action('clicked')}>
      <span><Icon name='check' /></span><span>Some text</span>
  </Button>);
