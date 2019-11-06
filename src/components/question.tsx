import * as React from 'react';

interface QuestionProps {
  /**
   * Child elements wrapped by the QuestionTile component.
   */
  children: any,
  /**
   * Hex or RGBA value for the question's background color.
   */
  backgroundColor?: string
}

const Question = (props: QuestionProps) =>
  <div className='question'>
    {props.children}
    <style jsx>{`
      .question {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
  
        padding: 1rem;
        background-color: ${props.backgroundColor ? props.backgroundColor : '#ccc'};
        font-size: 2rem;
      }
    `}</style>
  </div>;

export default Question;
