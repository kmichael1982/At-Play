import React, { CSSProperties } from 'react'

interface MouseCursorProps {
    style: CSSProperties
}

export  const MouseCursor: React.FC<MouseCursorProps> = ({ style }) => {
    return (
        <>
            <div className="mouseCursor cursor-outer" style={{ visibility: 'visible', ...style }}></div>
            <div className="mouseCursor cursor-inner" style={{ visibility: 'visible', ...style }}>
                <span>Drag</span>
            </div>
        </>
    )
}