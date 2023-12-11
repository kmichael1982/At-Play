import React, { useEffect, useRef, useState } from 'react'

import Slider from 'react-slick'
import { testimonialSlides } from './testimonailSlides'

interface TestimonialSlideProps {
    imgSrc: string
    index: number
    role: string
    name: string
    description: string
}

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({ imgSrc, index, role, description, name }) => (
    <div className="testimonial-s__slider-single slick-slide" data-slick-index={index} aria-hidden="true">
        <div className="row gaper align-items-center">
            <div className="col-12 col-lg-4 col-xxl-4">
                <div className="thumb">
                    <img src={imgSrc} alt="Image" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="322" viewBox="0 0 44 322" fill="none" className="d-none d-lg-block">
                        <path d="M43 -0.000976562V151.999L2 192.999H43V321.999" stroke="#414141"></path>
                    </svg>
                </div>
            </div>
            <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                <div className="testimonial-s__content">
                    <div className="quote">
                        <i className="fa-solid fa-quote-right"></i>
                    </div>
                    <div className="content">
                        <h4>{description}</h4>
                    </div>
                    <div className="content-cta">
                        <h5>{name}</h5>
                        <p>{role}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export const TestimonialClientsList = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0)
    const sliderRef = useRef<Slider | null>(null)
    const [ previousSlideImageSrc, setPreviousSlideImageSrc ] = useState<string | null>(null)

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        dots: false,
        speed: 2000,
        className: 'draggable',
        infinite: true,
        autoplaySpeed: 0,
        autoplay: false,
        cssEase: 'linear',
        beforeChange: (oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex)
        },
        afterChange: (index: number) => {
            const previousSlideIndex = (index - 1 + testimonialSlides.length) % testimonialSlides.length
            const previousSlideImageSrc = testimonialSlides[previousSlideIndex].imgSrc
            setPreviousSlideImageSrc(previousSlideImageSrc)

            const otherSectionImage = document.getElementById('other-section-image')
            if (otherSectionImage) {
                otherSectionImage.setAttribute('src', previousSlideImageSrc)
            }
        },
    }

    const getPreviousSlideImageSrc = (currentSlide: number): string  => {
        const previousSlideIndex = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length
        return testimonialSlides[previousSlideIndex].imgSrc
    }

    useEffect(() => {
        const imageSrc = getPreviousSlideImageSrc(currentSlide)
        setPreviousSlideImageSrc(imageSrc)

        const otherSectionImage = document.getElementById('other-section-image')
        if (otherSectionImage) {
            otherSectionImage.setAttribute('src', imageSrc)
        }
    }, [currentSlide])

    return (
        <>
            <div className="container position-relative">
                <div className="row">
                    <div className="col-12 col-xxl-10">
                        <div className="testimonial-s__slider slick-initialized slick-slider">
                            <Slider {...settings} ref={sliderRef}>
                                {testimonialSlides.map((item, index) => (
                                    <TestimonialSlide key={index} imgSrc={item.imgSrc} role={item.role} description={item.description} name={item.name} index={index} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className="slide-group justify-content-start">
                    <a
                        aria-label="previous item"
                        className="cursor-pointer slide-btn prev-testimonial-three slick-arrow"
                        onClick={() => sliderRef.current?.slickPrev()}
                    >
                        <i className="fa-solid fa-angle-left"></i>
                    </a>
                    <a
                        aria-label="next item"
                        className="cursor-pointer slide-btn next-testimonial-three slick-arrow"
                        onClick={() => sliderRef.current?.slickNext()}
                    >
                        <i className="fa-solid fa-angle-right"></i>
                    </a>
                </div>
            </div>

            <div className="other-section">
                <img className="other-section-image" src={previousSlideImageSrc || ''} alt="Next Slide Image" />
            </div>
        </>
    )
}