import * as React from 'react';

interface IconProps {
  /**
   * Name of the Material icon to use.
   */
  name: string,
  /**
   * Font size (preferably in rem) of the icon. Defaults to 1rem.
   */
  fontSize?: string,
  /**
   * Color (hex or rgba) for the icon.
   */
  color?: string
}

const Icon = (props: IconProps) =>
  <i className='material-icons'>
    {props.name}
    <style jsx>{`
      i {
        font-size: ${props.fontSize || '1rem'};
        color: ${props.color || '#000'};
      }
    `}</style>
  </i>;

export default Icon;
