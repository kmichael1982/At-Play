import React from 'react'
import AnimatedCursor from 'layouts/animated-cursor/AnimatedCursor'
import AppRouter from 'layouts/AppRouter'
import Footer from 'layouts/footer/Footer'
import FooterImg from 'assets/images/footer/footer-bg.png'
import Header from 'layouts/header/Header'
import ScrollToTopButton from 'layouts/scroll-to-top/ScrollToTop'
import useHomePage from 'utils/hooks/useHomePage'
import VideoModal from 'shared/ui/video-modal/VideoModal'

function App() {
    const isHomePage = useHomePage()

    return (
    <div className="my-app">
        {isHomePage && <Header/>}
        <AppRouter/>
        {isHomePage && <Footer background={FooterImg}/>}
        <AnimatedCursor
            color="220, 90, 90"
            outerAlpha={0.4}
            innerSize={8}
            outerSize={28}
            outerScale={2}
            innerScale={0.7}
        />
        <VideoModal />
        <ScrollToTopButton />
    </div>
  )
}

export default App
