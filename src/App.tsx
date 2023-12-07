import React, { useState, useEffect } from 'react'
import AppRouter from 'layouts/AppRouter'
import ScrollToTopButton from 'layouts/scroll-to-top/ScrollToTop'
import { MouseCursor } from 'layouts/mouse-cursor/MouseCursor'
import { PreLoader } from 'layouts/loader/Loader'

function App() {
    const [ cursorPosition, setCursorPosition ] = useState({ x: 0, y: 0 })
    const [ disableAnimation, setDisableAnimation ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(true)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setCursorPosition({ x: e.clientX, y: e.clientY })

        const targetElement = e.target as HTMLElement
        if (targetElement.style.cursor === "pointer") {
            setDisableAnimation(true)
        } else {
            setDisableAnimation(false)
        }
    }

    const handleMouseLeave = () => {
        setDisableAnimation(false)
    }

    useEffect(() => {
        const fakeContentLoading = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(fakeContentLoading)
    }, [])

    return (
        <div
            className="my-app"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {isLoading ? (
                <PreLoader />
            ) : (
                <>
                    <AppRouter />
                    <MouseCursor
                        style={{
                            transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                        }}
                    />
                    <ScrollToTopButton />
                </>
            )}
        </div>
    )
}

export default App