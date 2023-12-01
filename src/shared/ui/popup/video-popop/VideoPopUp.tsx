import React from 'react'
import '../popup-styles.scss'

interface VideoPopUpProps {
    videoUrl: string
    isOpen: boolean
    onClose: () => void
}

const VideoPopUp: React.FC<VideoPopUpProps> = ({ videoUrl, isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <div className="mfp-container mfp-iframe-holder">
            <div className="mfp-content">
                <div className="mfp-iframe-scaler">
                    <button title="Close (Esc)" onClick={onClose} type="button" className="mfp-close">
                        <i className="fa fa-light fa-xmark"></i>
                    </button>
                    <iframe className="mfp-iframe" src={videoUrl} ></iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoPopUp