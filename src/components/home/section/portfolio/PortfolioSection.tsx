import React from 'react'
import './portfolio-section.scss'
import LinesContent from 'shared/ui/design/LinesContent'
import OneImg from 'assets/images/portfolio/one.png'
import TwoImg from 'assets/images/portfolio/two.png'
import ThreeImg from 'assets/images/portfolio/three.png'
import FourImg from 'assets/images/portfolio/four.png'
import FiveImg from 'assets/images/portfolio/five.png'
import SixImg from 'assets/images/portfolio/six.png'
import SevenImg from 'assets/images/portfolio/seven.png'
import DotImg from 'assets/images/portfolio/dot.png'
import { TextSlider } from '../slider/TextSlider'
import PortfolioItem from './portfolio-item/ProtfolioItem'

function PortfolioSection() {

    const portfolioItems = [
        { image: OneImg, title: 'Digital Marketing', link: 'portfolio' },
        { image: TwoImg, title: 'Digital Marketing', link: 'portfolio' },
        { image: ThreeImg, title: 'Digital Marketing', link: 'portfolio' },
        { image: FourImg, title: 'Digital Marketing', link: 'portfolio' },
        { image: FiveImg, title: 'Digital Marketing', link: 'portfolio' },
        { image: SixImg, title: 'Digital Marketing', link: 'portfolio' },
        { image: SevenImg, title: 'Digital Marketing', link: 'portfolio' },
    ]

    return (
        <section className="section portfolio pb-0 fade-wrapper position-relative">
            <TextSlider
                settings={{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    arrows: false,
                    dots: false,
                    speed: 10000,
                    centerPadding: '15px',
                    infinite: true,
                    autoplaySpeed: 0,
                    autoplay: true,
                    cssEase: 'linear',
                }}
                labels={['digital portfolio', 'digital portfolio', 'digital portfolio']}
                href="/portfolio"
                className="portfolio__text-slider slick-initialized slick-slider"
                className1="portfolio__text-slider-single slick-slide slick-cloned"
            />

            <div className="container-fluid">
                <div className="row gaper" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat( auto-fit, minmax(400px, 1fr))'
                }}>
                    <div className="">
                        <div className="portfolio__single-alt-wrapper fade-top" >
                            <div className="portfolio__single-alt topy-tilt" >
                                <h4>
                                    <a href="/portfolio">view all work</a>
                                </h4>
                                <a href="portfolio" className="arr">
                                    {/*<i className="fa-sharp fa-solid fa-arrow-up-right"></i>*/}
                                    <i className="fa-solid fa-arrow-right" style={{ transform: ' rotate(315deg)' }}></i>
                                </a>
                                <img src={DotImg} alt="Image" className="dot-one" />
                                <img src={DotImg} alt="Image" className="dot-two" />
                            </div>
                        </div>
                    </div>

                    {portfolioItems.map((item, index) => (
                        <div key={index} className="">
                            <PortfolioItem srcImage={item.image} title={item.title} link={item.link} />
                        </div>
                    ))}
                </div>
            </div>
            <LinesContent />
        </section>
    )
}

export default PortfolioSection
