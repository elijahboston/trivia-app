import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ResultList from './result-list';

const stories = storiesOf('Result List', module);
stories.add('list with items', () => <div>
  <ResultList entries={[
    {
      type: 'boolean',
      category: 'Arts',
      difficulty: 'hard',
      question: 'Is yellow purple?',
      correctAnswer: true,
      answer: false
    },
    {
      type: 'boolean',
      category: 'True Crime',
      difficulty: 'hard',
      question: 'Is up down?',
      correctAnswer: true,
      answer: true
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