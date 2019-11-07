import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Question from './question';

const stories = storiesOf('Question Tile', module);
stories.addDecorator(withKnobs);
stories.add('with text', () => <div>
  <Question backgroundColor='#ccc'>{text('Text', 'Hello Storybook')}</Question>
  <style jsx>{`
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}</style>
</div>);