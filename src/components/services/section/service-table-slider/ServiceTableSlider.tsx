import React, { useRef, useState } from 'react'

import Slider from 'react-slick'
import { ServiceSliderElement } from './ServicesSliderElement'
import { serviceSlides } from './serviceSlides'

import './service-slider.scss'

export const ServiceTableSlider = () => {
    const sliderRef = useRef<Slider | null>(null)
    const [ currentSlide, setCurrentSlide ] = useState(0)
    const [ hoveredIndex, setHoveredIndex ] = useState<number | null>(null)

    const handleHover = (index: number | null) => {
        setHoveredIndex(index)
    }

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 4000,
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                },
            }
        ],
        beforeChange: (oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex)
        },
        afterChange: (index: number) => {
            setCurrentSlide(index)
        },
    }

    return (
        <section className="section service-t">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="service-t__slider slick-initialized slick-slider">
                            <div className="slick-list draggable" style={{padding: '0px'}}>
                                <Slider {...settings} ref={sliderRef} className="slick-track">
                                    {serviceSlides.map(( elem, index ) => (
                                      <ServiceSliderElement
                                          index={index}
                                          href={elem.href}
                                          title={elem.title}
                                          label={elem.label}
                                          ulList={elem.ulList}
                                          hoveredIndex={hoveredIndex}
                                          onHover={handleHover}
                                      />
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide-group">
                <a
                    aria-label="previous item"
                    className="cursor-pointer slide-btn prev-service-t slick-arrow"
                    onClick={() => sliderRef.current?.slickPrev()}
                >
                    <i className="fa-solid fa-angle-left"></i>
                </a>
                <a
                    aria-label="next item"
                    className="cursor-pointer slide-btn next-service-t slick-arrow"
                    onClick={() => sliderRef.current?.slickNext()}
                >
                    <i className="fa-solid fa-angle-right"></i>
                </a>
            </div>
        </section>
    )
}