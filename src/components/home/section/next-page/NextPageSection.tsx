import React from 'react'

import LinesContent from 'shared/ui/design/lines-content/LinesContent'
import { LinkButton } from 'shared/ui/buttons/ButtonUi'
import { TextSlider } from '../slider/TextSlider'
import { responsiveTextLSliderNext } from '../slider-responsive/text-slider-responsive'

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
                    slidesToShow: 2.65,
                    slidesToScroll: 3,
                    centerMode: true,
                    arrows: false,
                    dots: false,
                    speed: 10000,
                    infinite: true,
                    autoplaySpeed: 0,
                    autoplay: true,
                    cssEase: 'linear',
                    responsive: responsiveTextLSliderNext
                }}
                labels={['About Us', 'About Us', 'About Us', 'About Us', 'About Us', 'About Us', 'About Us', 'About Us']}
                href="/about-us"
                className="next__text-slider next__text-slider-single"
            />
            <LinesContent />
        </section>
    )
}

export default NextPageSection