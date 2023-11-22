import React from 'react'

export const VideoModals: React.FC<{
    isOpen: boolean
    onClose: () => void
}> = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <div className="video-modal">
            <div className="video-modal-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <iframe
                    title="YouTube Video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/RvreULjnzFo"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}