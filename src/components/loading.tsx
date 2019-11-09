import * as React from 'react'
import Icon from './icon'

/**
 * Full-screen loading page with spinner
 */
const Loading = () =>
  <div className='loading-container'>
    <div className='loading'>
      <h2>Loading</h2>
      <div className='loading-icon'>
        <Icon name='settings_backup_restore' fontSize='2rem' color='#fff' />
      </div>
    </div>
    <style jsx>{`
      .loading-container {
        z-index: 999;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        display: block;
        transition: opacity .2s ease-in;
        background: rgba(0, 0, 0, .5);
        backdrop-filter: blur(2px);
      }

      .loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
      }

      @keyframes rotation {
        0% { transform: rotate(0); }
        100% { transform: rotate(-360deg); }
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

export default Loading;