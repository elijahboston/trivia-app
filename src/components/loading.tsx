import * as React from 'react'
import {useSelector} from 'react-redux'
import {AppState} from '../redux/types'
import Icon from './icon'

/**
 * This component is always on the page, just not always visible
 */
const Loading = () => {
  const isLoading = useSelector((state: AppState) => state.api.isLoading)

  return (
    <div className='loading-container'>
      <div className='loading'>
        <h2>Loading</h2>
        <div className='loading-icon'>
          <Icon name='settings_backup_restore' fontSize='2rem' />
        </div>
      </div>
      <style jsx>{`
        @keyframes rotation {
          0% { transform: rotate(0); }
          100% { transform: rotate(-360deg); }
        }

        .loading-container {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;

          opacity: ${isLoading ? 1 : 0};
          display: ${isLoading ? 'block' : 'none'};
          transition: opacity .2s ease-in;
          background: rgba(0, 0, 0, .5);
          backdrop-filter: blur(2px);
        }

        .loading {
          text-align: center;
        }

        .loading-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: rotation 2s infinite linear;
          transform-origin: center center;
        }
      `}</style>
    </div>
  )
}

export default Loading;