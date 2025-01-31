import React, { useEffect, useRef } from 'react'

import TextAnimation from 'utils/hooks/useAnimatetText'
import { animateItem } from 'utils/hooks/animateItem'

import ThumbServicesOneImg from 'assets/images/services/thumb-one.png'
import ThumbServicesTwoImg from 'assets/images/services/thumb-two.png'

export const ServicesDetailsInfo= () => {
    const imageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        animateItem(imageRef)
    }, [])

    return (
        <section className="section service-details fade-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-10">
                        <div className="service-details__slider">
                            <div className="service-details__slider-single">
                                <div ref={imageRef} className="poster fade-top">
                                    <img src={ThumbServicesOneImg} alt="Image" />
                                </div>
                                <div className="details-group section__cta text-start">
                                    <h3 className="title-anim">
                                        <TextAnimation text="whi do we use it?" />
                                    </h3>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here', making it look
                                        like readable English.
                                    </p>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable. If you are going to use a passage of
                                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                                        middle of text. All the Lorem Ipsum generators on the Internet tend to
                                        repeat predefined chunks as necessary,
                                    </p>
                                </div>
                                <div className="section__content-cta">
                                    <div className="row gaper">
                                        <div className="col-12 col-lg-7">
                                            <div className="details-group">
                                                <h3 className="title-anim">
                                                    <TextAnimation text="OUR APPROACH" />
                                                </h3>
                                                <p>
                                                    We employ proven website design strategies in each and every work,
                                                    whether it's a simple informational website or a full-blown e-commerce
                                                    website.
                                                </p>
                                                <p>First we create sitemaps, user flows, and wireframes to hone your
                                                    message and desired interaction. Then comes our aesthetically remarkable
                                                    designs. Every design is optimized for mobile and desktop to create a
                                                    consistent.</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-5">
                                            <div className="poster-small">
                                                <img src={ThumbServicesTwoImg} alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}