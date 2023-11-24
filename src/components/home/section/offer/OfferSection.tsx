import React from 'react'
import './offer-styles.scss'
import LinesContent from 'shared/ui/design/lines-content/LinesContent'
import { Buttons, LinkButton } from 'shared/ui/buttons/ButtonUi'
import StarImg  from 'assets/images/offer/star.png'
import OneImage from 'assets/images/offer/one.png'
import TwoImage from 'assets/images/offer/two.png'
import ThreeImage from 'assets/images/offer/three.png'
import ThumbImage from 'assets/images/offer/thumb-one.png'
import { AnimatedText } from 'utils/hooks/useAnimatedText'

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
                            <LinkButton
                                isLink={true}
                                label="WHAT WE OFFER"
                                className="sub-title mb-0"
                                icon={<i className="fa-solid fa-arrow-right"></i>}
                                href="#"
                            />

                            <h2 className="title title-anim">
                                <AnimatedText>Giving</AnimatedText>
                                <AnimatedText>Your</AnimatedText>
                                <AnimatedText>Business</AnimatedText>
                                <AnimatedText>Some</AnimatedText>
                                <AnimatedText>Great</AnimatedText>
                                <AnimatedText>Ideas</AnimatedText>
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
                                <LinkButton
                                    isLink={true}
                                    label={`0${index}`}
                                    className="sub-title mb-0"
                                    icon={<i className="fa-solid fa-arrow-right"></i>}
                                    href="#"
                                />
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
