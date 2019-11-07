import * as React from 'react';

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

const Button = (props: ButtonProps) =>
  <button onClick={props.onClick}>
    {props.children}
    <style jsx>{`
      button {
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
  </button>;

export default Button;
