import * as React from 'react'
import {QuestionType} from '../redux/types'
import { default as ResultItem} from './result-item'

export interface ResultListProps {
  /**
   * Child elements wrapped by the ResultList component.
   */
  entries: QuestionType[]
}

const ResultList = (props: ResultListProps) =>
  <div className='result-list'>
    <ul>
      {props.entries.map((entry: QuestionType) => <ResultItem { ...entry }/>)}
    </ul>
    <style jsx>{`
      ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
    `}</style>
  </div>;

export default ResultList;
