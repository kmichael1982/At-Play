import React, { useState } from 'react'
import BgModalImage from 'assets/images/about/modal-bg.png'
import { VideoFrame } from 'shared/ui/design/video-frame/VideFrame'
import VideoPopUp from 'shared/ui/popup/video-popop/VideoPopUp'

export const VideoModal: React.FC<{
    imageSrc: string
}> = ({ imageSrc }) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const openYouTubeVideo = () => {
        setIsModalOpen(true)
    }

    const closeYouTubeVideo = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="video-modal">
            <img
                src={BgModalImage}
                alt="Image"
                className="modal-bg"
                style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    transform: 'translate(0px,0 %)', opacity: 1
                }}
            />
            <VideoFrame onClick={openYouTubeVideo} imageSrc={imageSrc} />
            <VideoPopUp
                isOpen={isModalOpen}
                onClose={closeYouTubeVideo}
                videoUrl="https://www.youtube.com/watch?v=RvreULjnzFo"
            />
        </div>
    )
}