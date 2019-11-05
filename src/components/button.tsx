interface ButtonProps {
  /**
   * Child elements wrapped by the Button component.
   */
  children: any,
  /**
   * Click event to attach to button
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}>
    {props.children}
  </button>
}