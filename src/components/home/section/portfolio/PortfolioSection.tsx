import React, { useEffect, useRef } from 'react'
import './portfolio-section.scss'
import LinesContent from 'shared/ui/design/lines-content/LinesContent'
import OneImg from 'assets/images/home/portfolio/one.png'
import TwoImg from 'assets/images/home/portfolio/two.png'
import ThreeImg from 'assets/images/home/portfolio/three.png'
import FourImg from 'assets/images/home/portfolio/four.png'
import FiveImg from 'assets/images/home/portfolio/five.png'
import SixImg from 'assets/images/home/portfolio/six.png'
import SevenImg from 'assets/images/home/portfolio/seven.png'
import DotImg from 'assets/images/home/portfolio/dot.png'
import { TextSlider } from '../slider/TextSlider'
import PortfolioItem from './portfolio-item/ProtfolioItem'
import { animateItem } from 'shared/ui/design/animation/animateItem'

function PortfolioSection() {
    const itemRef = useRef<HTMLDivElement | null>(null)

    const portfolioItems = [
        { image: OneImg, title: 'Digital Marketing', link: 'portfolio' },
        { image: TwoImg, title: 'Digital Marketing', link: 'portfolio' },
        { image: ThreeImg, title: 'Digital Marketing', link: 'portfolio' },
        { image: FourImg, title: 'Digital Marketing', link: 'portfolio' },
        { image: FiveImg, title: 'Digital Marketing', link: 'portfolio' },
        { image: SixImg, title: 'Digital Marketing', link: 'portfolio' },
        { special: true },
        { image: SevenImg, title: 'Digital Marketing', link: 'portfolio' },
    ]

    useEffect(() => {
        animateItem(itemRef)
    }, [])

    return (
        <section className="section portfolio pb-0 fade-wrapper position-relative">
            <TextSlider
                settings={{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: true,
                    arrows: false,
                    dots: false,
                    speed: 4000,
                    infinite: true,
                    autoplaySpeed: 0,
                    autoplay: true,
                    cssEase: 'linear',
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]
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
