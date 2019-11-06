import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';

const component = storiesOf('Button', module);
component.add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>);

component.add('with text and icon', () => (
  <Button onClick={action('clicked')}>
    <span>💯</span><span>Some text</span>
  </Button>
));
