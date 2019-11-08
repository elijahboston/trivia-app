import * as React from 'react'
import Loading from './loading'

interface LayoutProps {
  children: any
}

const Layout = (props: LayoutProps) =>
  <div className='layout'>
    <Loading />
    {props.children}
    <style jsx>{`
      .layout {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
  
        width: 90%;
        padding: 1rem;
        border-radius: .2rem;
      }
    `}</style>
  </div>

export default Layout
