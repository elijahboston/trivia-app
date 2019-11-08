import * as React from 'react';

interface QuestionProps {
  /**
   * Child elements wrapped by the QuestionTile component.
   */
  children: any,
  /**
   * Hex or RGBA value for the question's background color.
   */
  backgroundColor?: string,
  /**
   * Indicate we want to apply exit animation
   */
  isLeaving?: boolean
}

const Question = (props: QuestionProps) => {
  const questionClass = props.isLeaving ? 'flipOutX' : 'flipInX'
  return (
    <div className={`question animated fast ${questionClass}`}>
      {props.children}
      <style jsx>{`
        .question {
          min-height: 10rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1rem;
    
          border-radius: 1rem;
          padding: 1rem;
          background-color: ${props.backgroundColor ? props.backgroundColor : '#fff'};
          font-size: 1.5rem;
          color: #000;
        }
      `}</style>
    </div>
  )
}

export default Question;
