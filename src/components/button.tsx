import {default as React, useCallback, useState} from 'react'

interface ButtonProps {
  /**
   * Child elements wrapped by the Button component.
   */
  children: any,
  /**
   * Click event to attach to button.
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  /**
   * Primary color (hex or rgba) to use for the button.
   */
  primaryColor?: string,
  /**
   * Secondary color (hex or rgba) is used to alter style during click events.
   */
  secondaryColor?: string
}

const Button = (props: ButtonProps) => {
  
  const [isPressed, setIsPressed] = useState(false)

  const buttonClass = isPressed ? 'animated pulse faster' : ''

  /**
   * A helper function that intercepts the click action and delays
   * it until the animation has completed
   * @param evt The click event
   */
  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(true)

    setTimeout(() => {
      setIsPressed(false)
      props.onClick(evt)
    }, 500)
  }

  return (
    <button
    onClick={handleClick}
    className={`button ${buttonClass}`}>
      {props.children}
      <style jsx>{`
        button {
          outline: none;
          font-size: 2rem;
          padding: .5rem .8rem;
          border-radius: .2rem;
          border: 0px;
          box-shadow: 0px 6px 0px #67b3ff, 0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
          background: ${props.primaryColor ? props.primaryColor : '#8EC5FC'};
          background: linear-gradient(to right,
            ${props.primaryColor ? props.primaryColor : '#8EC5FC'},
            ${props.secondaryColor ? props.secondaryColor : '#E0C3FC'});
        }
      `}</style>
    </button>
  )
}

export default Button;
