import React, { useState } from 'react'
import AppRouter from 'layouts/AppRouter'
import ScrollToTopButton from 'layouts/scroll-to-top/ScrollToTop'
import VideoModal from 'shared/ui/video-modal/VideoModal'
import { MouseCursor } from 'layouts/mouse-cursor/MouseCursor'

function App() {
    const [ cursorPosition, setCursorPosition ] = useState({ x: 0, y: 0 })
    const [ disableAnimation, setDisableAnimation ] = useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setCursorPosition({ x: e.clientX, y: e.clientY })

        const targetElement = e.target as HTMLElement
        if (targetElement.style.cursor === 'pointer') {
            setDisableAnimation(true)
        } else {
            setDisableAnimation(false)
        }
    }

    const handleMouseLeave = () => {
        setDisableAnimation(false)
    }

    return (
        <div
            className="my-app"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <AppRouter/>
            <MouseCursor style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)` }} />
            <VideoModal />
            <ScrollToTopButton />
        </div>
    )
}

export default App
