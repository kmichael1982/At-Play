import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import SThumbImg from 'assets/images/home/testimonaials/s-thumb.png'
import SThumbThreeImg from 'assets/images/home/testimonaials/s-thumb-three.png'
import SThumbTwoImg from 'assets/images/home/testimonaials/s-thumb-two.png'

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
    const sliderRef = useRef(null)

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        dots: false,
        speed: 10000,
        infinite: true,
        autoplaySpeed: 0,
        autoplay: false,
        cssEase: 'linear',
        beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
    }

    useEffect(() => {
        const imageSrc = getPreviousSlideImageSrc(currentSlide)
        document.getElementById('other-section-image')?.setAttribute('src', imageSrc)
    }, [currentSlide])

    const testimonials = [
        {
            imgSrc: SThumbTwoImg,
            name: 'Daniel Smith',
            description: 'posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aeneannon odio porttitor, convallis erat sit amet, facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.',
            role: 'Senior engineer'
        },
        {
            imgSrc: SThumbThreeImg,
            name: 'Daniel Smith',
            description: 'posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aeneannon odio porttitor, convallis erat sit amet, facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.',
            role: 'Senior engineer'
        },
        {
            imgSrc: SThumbImg,
            name: 'Daniel Smith',
            description: 'posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aeneannon odio porttitor, convallis erat sit amet, facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.',
            role: 'Senior engineer'
        }
    ]

    const getPreviousSlideImageSrc = (currentSlide: any) => {
        const previousSlideIndex = (currentSlide - 1 + testimonials.length) % testimonials.length
        return testimonials[previousSlideIndex].imgSrc
    }

    return (
        <div className="container position-relative">
            <div className="row">
                <div className="col-12 col-xxl-10">
                    <div className="testimonial-s__slider slick-initialized slick-slider">
                        <div className="slick-list draggable" style={{padding: '0px'}}>
                            <Slider {...settings} ref={sliderRef} className="slick-track">
                                {testimonials.map((item, index) => (
                                    <TestimonialSlide key={index} imgSrc={item.imgSrc} role={item.role} description={item.description} name={item.name} index={index} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slide-group justify-content-start">
                <a aria-label="previous item" className="slide-btn prev-testimonial-three slick-arrow">
                    {/*<i className="fa-light fa-angle-left"></i>*/}
                    <i className="fa-solid fa-angle-left"></i>
                </a>
                <a aria-label="next item" className="slide-btn next-testimonial-three slick-arrow">
                    {/*<i className="fa-light fa-angle-right"></i>*/}
                    <i className="fa-solid fa-angle-right"></i>
                </a>
            </div>
            <div className="other-section">
                <img className="other-section-image" src={SThumbThreeImg} alt="Next Slide Image" />
            </div>
        </div>
    )
}