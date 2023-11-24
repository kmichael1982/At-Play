import React, { CSSProperties } from 'react'

export  const MouseCursor: React.FC<{
    style: CSSProperties
}> = ({ style }) => {
    return (
        <>
            <div className="mouseCursor cursor-outer" style={{ visibility: 'visible', ...style }}></div>
            <div className="mouseCursor cursor-inner" style={{ visibility: 'visible', ...style }}>
                <span>Drag</span>
            </div>
        </>
    )
}