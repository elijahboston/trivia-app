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
        margin: .5rem 0;
        border-bottom: 1px solid #d2d2d2;
      }

      li:last-child {
        border-bottom: none;
      }

      .is-correct {
        align-self: flex-start;
        margin-right: 1rem;
        border-radius: 20rem;
        background: #ccc;
      }

      .question {
        font-size: 1.2rem;
        flex-basis: 2;
      }
    `}</style>
  </li>;

export default ResultItem;
