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
        font-size: 1.2rem;
        padding: .5rem .8rem;
        border-radius: .2rem;
        border: 0px;
      }
    `}</style>
  </button>;

export default Button;
