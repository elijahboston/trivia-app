import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import QuestionTile from './question-tile';

const stories = storiesOf('Question Tile', module);
stories.addDecorator(withKnobs);
stories.add('with text', () => <div>
  <QuestionTile>{text('Text', 'Hello Storybook')}</QuestionTile>
  <style jsx>{`
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}</style>
</div>);