import React from 'react'

export const Thumbnail: React.FC<{
    src: string
    alt : string
}> = ({ src, alt }) => (
    <div className="bd-thumb fade-top" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0 px, 0px)', opacity: 1 }}>
        <img src={src} alt={alt} />
    </div>
);