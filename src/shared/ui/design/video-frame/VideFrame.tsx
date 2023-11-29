import React from 'react'

export const VideoFrame: React.FC<{
    onClick: (event: any) => void
    imageSrc: string
}> = ({ imageSrc, onClick }) => {
    return (
        <a onClick={onClick} className="video-frame video-btn" rel="noopener noreferrer">
            <img src={imageSrc} className="object-contain" alt="Image" />
            <i className="fa-sharp fa-solid fa-play"></i>
        </a>
    )
}