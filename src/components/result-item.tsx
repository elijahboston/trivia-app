import * as React from 'react';
import Icon from './icon';

export interface ResultItemProps {
  /**
   * The question.
   */
  question: string,
  /**
   * Whether the question was answered correctly.
   */
  isAnswerCorrect: boolean
}

const ResultItem = (props: ResultItemProps) =>
  <li className='result-item'>
    <span className='is-correct'>
      <Icon
        name={props.isAnswerCorrect ? 'check' : 'close'}
        color={props.isAnswerCorrect ? 'green' : 'red'}
        fontSize='2rem'
        />
    </span>
    <span className='question'>
      {props.question}
    </span>
    <style jsx>{`
      li {
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 0;
        margin: 0;
      }

      .is-correct {
        align-self: flex-start;
        margin-right: 1rem;
      }

      .question {
        font-size: 1.2rem;
        flex-basis: 2;
      }
    `}</style>
  </li>;

export default ResultItem;
