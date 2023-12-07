import React, { useEffect, useRef } from 'react'

import LinesContent from 'shared/ui/design/lines-content/LinesContent'
import { Buttons, LinkButton } from 'shared/ui/buttons/ButtonUi'
import { animateItem } from 'shared/ui/animation/animateItem'
import TextAnimation from 'utils/hooks/useAnimatetText'
import { OfferCtaItem } from './OfferCtaItem'

import ThumbImage from 'assets/images/offer/thumb-one.png'
import ThreeImage from 'assets/images/offer/three.png'
import StarImg  from 'assets/images/offer/star.png'
import OneImage from 'assets/images/offer/one.png'
import TwoImage from 'assets/images/offer/two.png'
import './offer-styles.scss'

const VIEW_ALL_SERVICES_URL = '/our-services'
const SERVICE_SINGLE_URL = '/service-details'

function getServiceTitle(index: number) {
    const titles = ['uI / uX experience', 'web development', 'digital marketing', 'product design']
    return titles[index - 1] || ''
}

function getServiceImage(index: number) {
    const images = [ OneImage, TwoImage, ThreeImage, ThumbImage ]
    return images[index - 1] || ''
}

function OfferSection() {
    const itemRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        animateItem(itemRef)
    }, [])

    return (
        <section className="section offer fade-wrapper light">
            <div className="container">
                <div className="row gaper">
                    <div className="col-12 col-lg-5">
                        <div className="offer__content section__content">
                            <LinkButton
                                isLink={true}
                                label="WHAT WE OFFER"
                                className="sub-title"
                                icon={<i className="fa-solid fa-arrow-right"></i>}
                                href="#"
                            />

                            <h2 className="title title-anim">
                                <TextAnimation text="Giving Your Business Some Great Ideas" />
                            </h2>
                            <div className="paragraph">
                                <p>Bring to the table win-win survival strategies to ensure proactive domination. At
                                    the end of the day, going forward, a new normal that has evolved from generation on
                                    the runway heading towards a streamlined cloud solution going forward porttitor
                                    dictum sapien.</p>
                            </div>
                            <div className="section__content-cta">
                                <Buttons title="view all services" href="our-services"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
                        <div className="offer__cta">
                            {[1, 2, 3, 4].map((index) => (
                                <OfferCtaItem
                                    key={index}
                                    index={index}
                                    getServiceImage={getServiceImage}
                                    getServiceTitle={getServiceTitle}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <img src={StarImg} alt="Image" className="star" />
            <LinesContent />
        </section>
    )
}

export default OfferSection