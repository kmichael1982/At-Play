import React from 'react'

import LinesContent from 'shared/ui/design/lines-content/LinesContent'
import { TestimonialClientsList } from './testimonial-clients-list/TestimonialClientsList'
import { TextSlider } from '../slider/TextSlider'
import { responsiveTextSliderTestimonial } from '../slider-responsive/text-slider-responsive'

import './testimonial-styles.scss'

interface TestimonialSectionProps {
    className?: string
    isActive?: boolean
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ className, isActive = true }) => {
    return (
        <section className={`section relative testimonial ${className && className} z-20 position-relative`}>
            <TextSlider
                labels={["clients testimonial", "clients testimonial"]}
                href=""
                className="testimonial__text-slider slick-initialized slick-slider"
                settings={{
                    slidesToShow: 1.385,
                    slidesToScroll: 2,
                    centerMode: true,
                    arrows: false,
                    dots: false,
                    speed: 10000,
                    infinite: true,
                    autoplaySpeed: 0,
                    autoplay: true,
                    cssEase: "linear",
                    responsive: responsiveTextSliderTestimonial
                }}
                h1="h1T"
                className1="testimonial__text-slider-single slick-slide slick-cloned"
            />
            <TestimonialClientsList />
            {isActive && <LinesContent />}
        </section>
    )
}

export default TestimonialSection