import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LinesContent from 'shared/ui/design/LinesContent'
import './next-styles.scss'

function NextPageSection() {
    const slickSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 1500,
        autoplay: true,
    };

    return (
        <section className="section next-page">
            <div className="container mx-auto">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="section__header text-center">
                            <a href="/" className="sub-title mb-0">
                                Next Page
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="next__text-slider">
                    <div className="next__text-slider-single">
                        <h2 className="h1">
                            <a href="about-us.html">
                                About Us
                            </a>
                        </h2>
                    </div>

                    {/* Add more slides with unique data-slick-index values */}
            </div>

            <LinesContent />
        </section>
    );
}

export default NextPageSection;
