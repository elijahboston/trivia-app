import * as React from 'react'
import Loading from '../components/loading'
import {useSelector} from 'react-redux'
import {AppState} from '../redux/types'


interface LayoutProps {
  children: any
}

const Layout = (props: LayoutProps) => {
  const isLoading = useSelector((state: AppState) => state.api.isLoading)

  return <div className='layout'>
    
    {isLoading && <Loading />}

    {props.children}
    <style jsx>{`
      .layout {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
  
        width: 90%;
        border-radius: .2rem;
      }
    `}</style>
  </div>
}

export default Layout
