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

      max-width: 800px;
      padding: 1rem;
      border-radius: 1rem;
      
      background: #f1f1f1;
    `}</style>
  </div>

export default Layout
