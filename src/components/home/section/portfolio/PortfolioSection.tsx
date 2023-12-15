import React, { useEffect, useRef } from 'react'

import LinesContent from 'shared/ui/design/lines-content/LinesContent'
import { animateItem } from 'utils/hooks/animateItem'
import PortfolioItem from './portfolio-item/ProtfolioItem'
import { TextSlider } from '../slider/TextSlider'
import { responsiveTextSliderPortfolio } from '../slider-responsive/text-slider-responsive'

import OneImg from 'assets/images/home/portfolio/one.png'
import TwoImg from 'assets/images/home/portfolio/two.png'
import ThreeImg from 'assets/images/home/portfolio/three.png'
import FourImg from 'assets/images/home/portfolio/four.png'
import FiveImg from 'assets/images/home/portfolio/five.png'
import SixImg from 'assets/images/home/portfolio/six.png'
import SevenImg from 'assets/images/home/portfolio/seven.png'
import DotImg from 'assets/images/home/portfolio/dot.png'
import './portfolio-section.scss'

function PortfolioSection() {
    const itemRef = useRef<HTMLDivElement | null>(null)

    const portfolioItems = [
        { image: OneImg, title: 'Digital Marketing', link: 'portfolio' },
        { image: TwoImg, title: 'Product Design', link: 'portfolio' },
        { image: ThreeImg, title: 'Website Development', link: 'portfolio' },
        { image: FourImg, title: 'Graphic Design', link: 'portfolio' },
        { image: FiveImg, title: 'Social Media Management', link: 'portfolio' },
        { image: SixImg, title: 'Billboard Campaigns', link: 'portfolio' },
        { special: true },
        { image: SevenImg, title: 'AI Marketing', link: 'portfolio' },
    ]

        

    useEffect(() => {
        animateItem(itemRef)
    }, [])

    return (
        <section className="section portfolio pb-0 fade-wrapper position-relative">
            <TextSlider
                settings={{
                    slidesToShow: 1.5,
                    slidesToScroll: 2,
                    centerMode: true,
                    arrows: false,
                    dots: false,
                    speed: 10000,
                    infinite: true,
                    autoplaySpeed: 0,
                    autoplay: true,
                    cssEase: 'linear',
                    responsive: responsiveTextSliderPortfolio
                }}
                labels={['digital portfolio', 'digital portfolio', 'digital portfolio', 'digital portfolio', 'digital portfolio']}
                href="/portfolio"
                className="portfolio__text-slider"
                className1="portfolio__text-slider-single slick-slide slick-cloned"
            />

            <div className="container-fluid">
                <div className="row gaper" >
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="col-12 col-sm-6 col-xl-3">
                            {item.special ? (
                                <div className="portfolio__single-alt-wrapper fade-top" ref={itemRef}>
                                    <div className="portfolio__single-alt topy-tilt">
                                        <h4>
                                            <a href="/portfolio">view all work</a>
                                        </h4>
                                        <a href="/portfolio" className="arr">
                                            <i className="fa-solid fa-arrow-right" style={{ transform: ' rotate(315deg)' }}></i>
                                        </a>
                                        <img src={DotImg} alt="Image" className="dot-one" />
                                        <img src={DotImg} alt="Image" className="dot-two" />
                                    </div>
                                </div>
                            ) : (
                                <PortfolioItem srcImage={item.image} title={item.title || ''} link={item.link || ''} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <LinesContent />
        </section>
    )
}

export default PortfolioSection
