import React, { CSSProperties, memo } from 'react'
import './mouse-cursor-styles.scss'

interface MouseCursorProps {
    style: CSSProperties
}

export  const MouseCursor: React.FC<MouseCursorProps> = memo(({ style }) => {
    return (
        <>
            <div className="mouseCursor cursor-outer" style={{ visibility: 'visible', ...style }}></div>
            <div className="mouseCursor cursor-inner" style={{ visibility: 'visible', ...style }}>
                <span>Drag</span>
            </div>
        </>
    )
})