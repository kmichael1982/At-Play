import React, { useState, memo } from 'react'

import VideoUrl from 'assets/images/popup-video.png'

const VideoModal = memo(() => {
    const [ isActiveVideoModal, setIsActiveVideoModal ] = useState(true)

    return (
        <div className={`${isActiveVideoModal ? 'd-none' : 'vid-m'}`}>
            <div className="vid-c">
                <a onClick={() => setIsActiveVideoModal(!isActiveVideoModal)} href="" aria-label="close video popup" className="close-v">
                    <i className="fa fa-light fa-xmark"></i>
                </a>
                <video autoPlay={true} loop={true} muted={true} controls={true}>
                    <source src={VideoUrl} type="video/mp4" />
                </video>
                <h5>Hello</h5>
            </div>
        </div>
    )
}, () => false)

export default VideoModal