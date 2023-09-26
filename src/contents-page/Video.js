import React from 'react';
import YouTube from 'react-youtube';
import '../styles/components/Video.css'

const Video = () => {
    const videoId = '0IFi0P79ilk';

    const opts = {
        height: '500',
        width: '900',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className='video-container'>
            <YouTube videoId={videoId} opts={opts} />
        </div>
    )
}

export default Video;