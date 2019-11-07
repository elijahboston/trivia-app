import * as React from 'react'
import {useSelector} from 'react-redux'
import {AppState} from '../redux/types'

/**
 * This component is always on the page, just not always visible
 */
const Loading = () => {
  const isLoading = useSelector((state: AppState) => state.api.isLoading)

  return (
    <div className='loading'>
      <h2>Loading</h2>
      <style jsx>{`
        opacity: ${isLoading ? 1 : 0};
        display: ${isLoading ? 'block' : 'none'};
        position: absolute;
        width: 100%;
        height: 100%;
        transition: opacity .2s ease-in;
        background: rgba(0, 0, 0, .5);
        backdrop-filter: blur(2px);
      `}</style>
    </div>
  )
}

export default Loading