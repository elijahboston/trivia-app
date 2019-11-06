import * as React from 'react';
import Icon from './icon';
import {QuestionType} from '../redux/types'

const ResultItem = (props: QuestionType) =>
  <li className='result-item'>
    <span className='is-correct'>
      <Icon
        name={props.correctAnswer === props.answer ? 'check' : 'close'}
        color={props.correctAnswer === props.answer ? 'green' : 'red'}
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
