import React, { useRef, useState } from 'react'

import Slider from 'react-slick'
import { SliderGroupButton } from 'shared/ui/design/slider-group/SliderGroupButton'
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
        centerMode: true,
        className: "center",
        arrows: false,
        dots: false,
        speed: 500,
        infinite: true,
        padding: "40px",
        autoplay: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
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
                            <div className="slick-list draggable">
                                <Slider {...settings} ref={sliderRef} >
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
            <SliderGroupButton sliderRef={sliderRef} />
        </section>
    )
}