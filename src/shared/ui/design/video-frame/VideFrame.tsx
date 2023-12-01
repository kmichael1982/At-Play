import React from 'react'

export const VideoFrame: React.FC<{
    onClick: (event: any) => void
    imageSrc: string
    className?: string
}> = ({ imageSrc, onClick, className }) => {
    return (
        <a onClick={onClick} className={`video-frame video-btn ${className && className}`} rel="noopener noreferrer">
            <img src={imageSrc} className="object-contain" alt="Image" />
            <i className="fa-sharp fa-solid fa-play"></i>
        </a>
    )
}