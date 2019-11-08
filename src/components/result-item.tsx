import * as React from 'react'
import Icon from './icon'
import {Question} from '../redux/types'

const ResultItem = (props: Question) => {
  const isAnswerCorrect = props.correctAnswer === props.answer

  return (
    <li className='result-item'>
      <span className='is-correct'>
        <Icon
          name={isAnswerCorrect ? 'check' : 'close'}
          color={isAnswerCorrect ? 'green' : 'red'}
          fontSize='2rem'
          />
      </span>
      <div className='details'>
        <span className='question'>{props.question}</span>
        <div className='answers'>
          <p>Correct answer: {props.correctAnswer ? 'True' : 'False'}</p>
          <p>Your answer: {props.answer ? 'True' : 'False'}</p>
        </div>
      </div>
      <style jsx>{`
        li {
          display: flex;
          justify-content: left;
          align-items: center;
          padding: 1rem;
          margin: 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
        }

        li:last-child {
          border-bottom: none;
        }

        .is-correct {
          align-self: flex-start;
          margin-right: 1rem;
          border-radius: 20rem;
          font-size: .2rem;
          background: #fff;
        }

        .details {
          flex-basis: 2;
        }

        .question {
          font-weight: bold;
          font-size: 1.2rem;
        }

        .answers {
          font-size: .8rem;
          color: #ccc;
        }

        .answers p {
          margin: 0;
        }
      `}</style>
    </li>
  )
}

export default ResultItem;
