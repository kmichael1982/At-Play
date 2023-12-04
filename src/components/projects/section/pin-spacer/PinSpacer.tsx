import React, { useEffect } from 'react'

import { ProjectSingleElem } from './project-single-elem/ProjectSingleElem'
import ProjectElemThreeImg from 'assets/images/pojects/hr-three.png'
import ProjectElemFiveImg from 'assets/images/pojects/hr-five.png'
import ProjectElemFourImg from 'assets/images/pojects/hr-four.png'
import ProjectElemOneImg from 'assets/images/pojects/hr-one.png'
import ProjectElemTwoImg from 'assets/images/pojects/hr-two.png'
import ProjectElemSixImg from 'assets/images/pojects/hr-six.png'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const PinSpacer = () => {
    const projectElemList = [
        { projectImageSrc: ProjectElemOneImg, href: '/project-single', title: 'mobile app development' },
        { projectImageSrc: ProjectElemTwoImg, href: '/project-single', title: 'brand identity difference' },
        { projectImageSrc: ProjectElemThreeImg, href: '/project-single', title: 'marketing app solutions' },
        { projectImageSrc: ProjectElemFourImg, href: '/project-single', title: 'LMS web app lication' },
        { projectImageSrc: ProjectElemFiveImg, href: '/project-single', title: 'brand identity difference' },
        { projectImageSrc: ProjectElemSixImg, href: '/project-single', title: 'digital website development' },
        { projectImageSrc: ProjectElemOneImg, href: '/project-single', title: 'mobile app development' },
        { projectImageSrc: ProjectElemTwoImg, href: '/project-single', title: 'brand identity difference' },
        { projectImageSrc: ProjectElemThreeImg, href: '/project-single', title: 'marketing app solutions' },
        { projectImageSrc: ProjectElemFourImg, href: '/project-single', title: 'LMS web app lication' },
        { projectImageSrc: ProjectElemFiveImg, href: '/project-single', title: 'brand identity difference' },
        { projectImageSrc: ProjectElemSixImg, href: '/project-single', title: 'digital website development' }
    ]

    useEffect(() => {
        const projectElems = gsap.utils.toArray(".project-elem")

        gsap.to(projectElems, {
            xPercent: -100 * (projectElems.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".section",
                pin: true,
                scrub: 4,
                snap: 1 / (projectElems.length - 1),
                end: () => {
                    const sectionElement = document.querySelector(".pin-spacer") as HTMLElement | null
                    return "+=" + (sectionElement?.offsetWidth || 0)
                }
            }
        })
    }, [])

    return (
        <div className="pin-spacer">
            <section className="section project-sl">
                {
                    projectElemList.map(( elem, index ) =>
                        <ProjectSingleElem
                            projectImageSrc={elem.projectImageSrc}
                            href={elem.href}
                            title={elem.title}
                            key={index}
                            className="project-elem"
                        />
                    )
                }
            </section>
        </div>
    )
}