import * as React from 'react'

interface LayoutProps {
  children: any
}

const Layout = (props: LayoutProps) =>
  <div className='layout'>
    {props.children}
    <style jsx>{`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 800px

      background: #d3d;
    `}</style>
  </div>

export default Layout
