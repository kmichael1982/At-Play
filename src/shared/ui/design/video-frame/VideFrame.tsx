import React from 'react'

interface VideoFrameProps {
    onClick: () => void
    imageSrc: string
    className?: string
}

export const VideoFrame: React.FC<VideoFrameProps> = ({ imageSrc, onClick, className }) => {
    return (
        <a
            onClick={onClick}
            className={`video-frame video-btn cursor-pointer ${className && className}`}
            rel="noopener noreferrer"
        >
            <img src={imageSrc} className="object-contain" alt="Image" />
            <i className="fa-sharp fa-solid fa-play"></i>
        </a>
    )
}