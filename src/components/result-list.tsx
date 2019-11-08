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
        margin-bottom: 2rem;
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 20rem;
        border-radius: 1rem;
        box-shadow: inset 1px 1px 5px 0px rgba(255,255,255,1);
      }
    `}</style>
  </div>;

export default ResultList;
