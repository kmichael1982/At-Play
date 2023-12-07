import React from 'react'

interface SliderGroupButtonProps {
    sliderRef: any
}
export const SliderGroupButton: React.FC<SliderGroupButtonProps> = ({ sliderRef }) => {
    return (
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
    )
}