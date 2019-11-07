import * as React from 'react'
import {Question} from '../redux/types'
import { default as ResultItem} from './result-item'

export interface ResultListProps {
  /**
   * Child elements wrapped by the ResultList component.
   */
  entries: Question[]
}

const ResultList = (props: ResultListProps) =>
  <div className='result-list'>
    <ul>
      {props.entries.map((entry: Question) => <ResultItem key={entry.id} {...entry} />)}
    </ul>
    <style jsx>{`
      ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        list-style-type: none;
        padding: 0;
        margin: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 20rem;
        margin-bottom: 2rem;
      }
    `}</style>
  </div>;

export default ResultList;
