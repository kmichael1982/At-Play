import React, { useState } from 'react'

import { Buttons } from 'shared/ui/buttons/ButtonUi'
import { PortfolioItem } from './portfolio-item/PortfolioItem'

import ElevenImg from 'assets/images/portfolio/eleven.png'
import FifteenImg from 'assets/images/portfolio/fifteen.png'
import EighteenImg from 'assets/images/portfolio/eighteen.png'
import FourteenImg from 'assets/images/portfolio/fourteen.png'
import SevenTenImg from 'assets/images/portfolio/seventeen.png'
import SixteenImg from 'assets/images/portfolio/sixteen.png'
import ThirteenImg from 'assets/images/portfolio/thirteen.png'
import TwelveImg from 'assets/images/portfolio/twelve.png'
import './portfolio-styles.scss'

export const PortfolioPageInfo = () => {
    const initialVisibleItems = 4
    const [ visibleItems, setVisibleItems ] = useState(initialVisibleItems)

    const handleLoadMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + initialVisibleItems)
    }

    const portfolioItems = [
        { imgSrc: ElevenImg, title: 'LMS Web Application' },
        { imgSrc: TwelveImg, title: 'LMS Web Application' },
        { imgSrc: FifteenImg, title: 'LMS Web Application' },
        { imgSrc: SixteenImg, title: 'LMS Web Application' },
        { imgSrc: SevenTenImg, title: 'LMS Web Application' },
        { imgSrc: EighteenImg, title: 'LMS Web Application' },
        { imgSrc: ThirteenImg, title: 'LMS Web Application' },
        { imgSrc: FourteenImg, title: 'LMS Web Application' },
    ]

    const getColumnClasses = (index: number, totalItems: number) => {
        const isLargeColumn = index === 0 || index === 1 || index === totalItems - 1 || index === totalItems - 2
        return isLargeColumn ? "col-12 col-lg-6" : "col-12 col-lg-6 col-xxl-3"
    }

    return (
        <section className="section portfolio-m fade-wrapper">
            <div className="container">
                <div className="row gaper">
                    {
                        portfolioItems.slice(0, visibleItems).map((item, index) => (
                            <div key={index} className={getColumnClasses(index, visibleItems)}>
                                <PortfolioItem imgSrc={item.imgSrc} title={item.title} />
                            </div>
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="section__content-cta text-center" onClick={handleLoadMore}>
                            <Buttons title="Load More.."/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}