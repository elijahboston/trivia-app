import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ResultList from './result-list';

const stories = storiesOf('Result List', module);
stories.add('list with items', () => <div>
  <ResultList entries={[
    {
      question: 'What is yam?',
      isAnswerCorrect: false
    },
    {
      question: 'What is yellow?',
      isAnswerCorrect: true
    }
  ]} />
  <style jsx>{`
    div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}</style>
</div>);