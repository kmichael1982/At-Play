import React from 'react'

import LinesContent from 'shared/ui/design/lines-content/LinesContent'
import { LinkButton } from 'shared/ui/buttons/ButtonUi'
import { TextSlider } from '../slider/TextSlider'

import './next-styles.scss'

function NextPageSection() {
    return (
        <section className="section relative next-page">
            <div className="container mx-auto">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="section__header text-center">
                            <LinkButton
                                isLink={true}
                                label="Next Page"
                                className="sub-title mb-0"
                                icon={<i className="fa-solid fa-arrow-right"></i>}
                                href="/about-us"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <TextSlider
                settings={{
                    slidesToShow: 3,
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
                labels={['About Us', 'About Us', 'About Us', 'About Us']}
                href="/about-us"
                className="next__text-slider next__text-slider-single"
            />
            <LinesContent />
        </section>
    )
}

export default NextPageSection