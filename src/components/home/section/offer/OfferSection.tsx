import React from 'react'
import './offer-styles.scss'
import LinesContent from 'shared/ui/design/LinesContent'
import { Buttons } from 'shared/ui/buttons/ButtonUi'
import StarImg  from 'assets/images/offer/star.png'
import OneImage from 'assets/images/offer/one.png'
import TwoImage from 'assets/images/offer/two.png'
import ThreeImage from 'assets/images/offer/three.png'
import ThumbImage from 'assets/images/offer/thumb-one.png'

const VIEW_ALL_SERVICES_URL = '/our-services'
const SERVICE_SINGLE_URL = '/service-single'

function getServiceTitle(index: any) {
    const titles = ['uI / uX experience', 'web development', 'digital marketing', 'product design']
    return titles[index - 1] || ''
}

function getServiceImage(index: any) {
    const images = [OneImage, TwoImage, ThreeImage, ThumbImage]
    return images[index - 1] || ''
}


function OfferSection() {
    return (
        <section className="section offer fade-wrapper light">
            <div className="container">
                <div className="flex items-start">
                    <div className="w-1/2">
                        <div className="offer__content section__content">
                              <span className="sub-title">
                                 WHAT WE OFFER
                                 <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            <h2 className="title title-anim">
                                Giving Your Business Some Great Ideas
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
                    <div className="offer__cta ml-8 w-1/2">
                        {[1, 2, 3, 4].map((index) => (
                            <div key={index} className="offer__cta-single fade-top">
                                    <span className="sub-title">
                                        {`0${index}`}
                                        <i className="fa-solid fa-arrow-right" style={{ transform: 'rotate(320deg)' }}></i>
                                    </span>
                                <h2>
                                    <a className="flex" href={SERVICE_SINGLE_URL}>
                                        {getServiceTitle(index)}
                                        <i className="fa-solid fa-arrow-right" style={{transform: 'rotate(320deg)'}}></i>
                                        {/*<i className="fa-sharp fa-solid fa-arrow-up-right"></i>*/}
                                    </a>
                                </h2>
                                <div
                                    className="offer-thumb-hover none block"
                                    data-background={getServiceImage(index)}
                                    style={{backgroundImage: `url(${getServiceImage(index)})`, transform: 'translate(196px, 96.8449px) rotate(15deg)'}}
                                ></div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <img src={StarImg} alt="Image" className="star" />

            <LinesContent />
        </section>
    )
}

export default OfferSection
