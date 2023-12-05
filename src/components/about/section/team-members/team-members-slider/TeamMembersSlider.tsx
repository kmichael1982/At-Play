import React, { useRef, useState } from 'react'

import Slider from 'react-slick'
import { SliderGroupButton } from 'shared/ui/design/slider-group/SliderGroupButton'
import TeamMembersSliderElem from './TeamMembersSliderElem'
import { teamMembersSlider } from './teamMembersSlider'

export const TeamMembersSlider = () => {
    const sliderRef = useRef<Slider | null>(null)
    const [ currentSlide, setCurrentSlide ] = useState<number>(0)
    const [ activeIndex, setActiveIndex ] = useState<number>(0)

    const handleSlideChange = (index: number) => {
        setActiveIndex(index)
    }

    const settings = {
        slidesToShow: 3,
        speed: 500,
        dots: false,
        infinite: true,
        autoplay: false,
        // className: "slick-center-active",
        centerMode: true,
        centerPadding: "30px",
        beforeChange: (oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex)
        },
        afterChange: (index: number) => {
            setCurrentSlide(index)
        },
    }


    return (
        <div className="team-r position-relative">
            <Slider {...settings} ref={sliderRef} className="team-s__slider">
                {teamMembersSlider.map((teamMember, index) => {
                    console.log(sliderRef.current, 'sliderRef', activeIndex)
                    return (
                        <TeamMembersSliderElem
                            key={index}
                            index={index}
                            teamMember={teamMember}
                            activeIndex={activeIndex}
                            onSlideChange={() => handleSlideChange(index)}
                        />
                    )
                })}
            </Slider>
            <SliderGroupButton sliderRef={sliderRef} />
        </div>
    )
}