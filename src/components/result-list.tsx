import * as React from 'react';
import { default as ResultItem, ResultItemProps} from './result-item';

export interface ResultListProps {
  /**
   * Child elements wrapped by the ResultList component.
   */
  entries: ResultItemProps[]
}

const ResultList = (props: ResultListProps) =>
  <div className='result-list'>
    <ul>
      {props.entries.map((entry: ResultItemProps) => <ResultItem { ...entry }/>)}
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
