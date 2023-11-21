import React, { useState } from 'react'
import VideoUrl from 'assets/images/popup-video.png'

function VideoModal() {
    const [ isActiveVideoModal, setIsActiveVideoModal ] = useState(true)

    return (
        <div className={`${isActiveVideoModal ? 'flex' : 'none'} vid-m`}>
            <div className="vid-c">
                <a onClick={() => {setIsActiveVideoModal(false)}} href="" aria-label="close video popup" className="close-v">
                    <i className="fa-light fa-xmark-large">X</i>
                </a>
                <video autoPlay={true} loop={true} muted={true} controls={true}>
                    <source src={VideoUrl} type="video/mp4" />
                </video>
                <h5>Hello</h5>
            </div>
        </div>
    );
}

export default VideoModal