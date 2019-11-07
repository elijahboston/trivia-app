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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      max-width: 800px;
      padding: 1rem;
      border-radius: 1rem;
      
      background-color: #FF3CAC;
      background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);      
    `}</style>
  </div>

export default Layout
