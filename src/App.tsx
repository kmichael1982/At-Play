import './App.css'
import Footer from 'layouts/footer/Footer'
import Header from 'layouts/header/Header'
import AppRouter from "layouts/AppRouter"
import FooterImg from 'assets/images/footer/footer-bg.png'
import AnimatedCursor from 'layouts/animated-cursor/AnimatedCursor'
import ScrollToTopButton from 'layouts/scroll-to-top/ScrollToTop'

function App() {
  return (
    <div className="App">
        <Header/>
        <AppRouter/>
        <Footer background={FooterImg}/>
        <AnimatedCursor
            color="220, 90, 90"
            outerAlpha={0.4}
            innerSize={12}
            outerSize={28}
            outerScale={5}
            innerScale={0.7}
        />
        <ScrollToTopButton />
    </div>
  )
}

export default App
