import React, { useEffect } from 'react'
import SocialMenuList from 'shared/ui/design/social-list/SocialMenuList'

interface Skill {
    name: string
    percent: number
}

interface TeamMember {
    href: string
    image: string
    name: string
    role: string
    description: string
    info: string
    skills: Skill[]
}

interface TeamMembersSliderElemProps {
    index: number
    teamMember: TeamMember
    activeIndex: number
    onSlideChange: (activeIndex: number) => void
}

const TeamMembersSliderElem: React.FC<TeamMembersSliderElemProps> = ({ index, teamMember, activeIndex, onSlideChange }) => {
    const isActive = activeIndex === index

    useEffect(() => {
        onSlideChange(index)
    }, [index, onSlideChange])

    const sliderClass = `${!isActive ? 'team-s__slider-single slick-slide slick-cloned' : ''}`

    console.log(activeIndex)
    return (
        <div className={sliderClass} data-slick-index={index} aria-hidden="true">
            <div className="team-wrap">
                <div className="thumb">
                    <a href={teamMember.href}>
                        <img src={teamMember.image} alt="Image" />
                    </a>
                </div>

                <div className="content">
                    <div className="intro">
                        <h5>
                            <a href={teamMember.href}>{teamMember.name}</a>
                        </h5>
                        <p>{teamMember.role}</p>
                    </div>
                    <hr />
                    <div className="inner">
                        <p>{teamMember.description}</p>
                        <div className="skill-wrap">
                            {
                                teamMember.skills.map(elem => {
                                    return (
                                        <div className="skill-bar-single">
                                            <div className="skill-bar-title">
                                                <p>{elem.name}</p>
                                            </div>
                                            <div className="skill-bar-wrapper" data-percent="75%">
                                                <div className="skill-bar">
                                                    <div className="skill-bar-percent" style={{width: `${elem.percent}%`}}>
                                                        <span className="percent-value">{elem.percent}%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p>{teamMember.info}</p>
                    </div>

                    <div className="social">
                        <SocialMenuList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMembersSliderElem