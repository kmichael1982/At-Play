import React, { useEffect, useRef } from 'react'

import { Buttons, LinkButton } from 'shared/ui/buttons/ButtonUi'
import TextAnimation from 'utils/hooks/useAnimatetText'
import SkillBar from './skil-bar/SkilBar'

import DotLargeIcon from 'assets/images/home/agency/dot-large.png'
import ThumbOneImg from 'assets/images/home/agency/thumb-one.png'
import ThumbTwoImg from 'assets/images/home/agency/thumb-two.png'
import StarIcon from 'assets/images/star.png'
import './agency-styles.scss'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function AgencySection() {
    const thumbOneRef = useRef<HTMLImageElement | null>(null)
    const thumbTwoRef = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        const thumbOne = thumbOneRef.current
        const thumbTwo = thumbTwoRef.current

        if (thumbOne && thumbTwo) {
            const thumbOneOffset = thumbOne.getBoundingClientRect().top
            const thumbTwoOffset = thumbTwo.getBoundingClientRect().top

            const scrollFactor = 0.01

            const thumbOneTranslation = -70 + thumbOneOffset * scrollFactor
            const thumbTwoTranslation = 70 + thumbTwoOffset * scrollFactor

            gsap.from(thumbOne, {
                duration: 3,
                left: thumbOneTranslation,
                scale: 0.9,
                opacity: 0,
                scrollTrigger: {
                    trigger: thumbOne,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            })

            gsap.from(thumbTwo, {
                duration: 3,
                left: thumbTwoTranslation + 120,
                scale: 0.9,
                opacity: 0,
                scrollTrigger: {
                    trigger: thumbTwo,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            })
        }
    }, [thumbOneRef, thumbTwoRef])

    return (
        <section className="section agency agency">
            <div className="container px-4 mx-auto">
                <div className="row gaper align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="agency__thumb">
                            <img
                                ref={thumbOneRef}
                                src={ThumbOneImg}
                                alt="Image"
                                className="thumb-one fade-left"
                                style={{ left: 0, opacity: 1 }}
                            />
                            <img
                                ref={thumbTwoRef}
                                src={ThumbTwoImg}
                                alt="Image"
                                className="thumb-two fade-right"
                                style={{ left: 120, opacity: 1 }}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="agency__content section__content">
                            <LinkButton
                                isLink={true}
                                label="WELCOME"
                                className="sub-title"
                                icon={<i className="fa-solid fa-arrow-right"></i>}
                                href="#"
                            />

                            <h2 className="title title-anim" >
                                <TextAnimation text="We Are Digital Creative Agency In London" />
                            </h2>

                            <div className="paragraph">
                                <p>
                                    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                                    going forward, a new normal that has evolved from generation on the runway heading towards a streamlined
                                    cloud solution going forward porttitor dictum sapien.
                                </p>
                            </div>
                            <div className="skill-wrap mb-10">
                                <SkillBar title="Website design" percent={75} />
                                <SkillBar title="Digital Marketing" percent={90} />
                            </div>
                            <Buttons title="Know More" href="/about-us" />
                        </div>
                    </div>
                </div>
            </div>

            <img src={StarIcon} alt="Image" className="star" />
            <img src={DotLargeIcon} alt="Image" className="dot-large" />
        </section>
    )
}

export default AgencySection