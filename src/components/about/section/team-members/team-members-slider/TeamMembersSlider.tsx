import React, { useRef } from 'react'

import Slider from 'react-slick'
import { SliderGroupButton } from 'shared/ui/design/slider-group/SliderGroupButton'
import SocialMenuList from 'shared/ui/design/social-list/SocialMenuList'

import teamOneImg from 'assets/images/about/teams/one.png'
import teamTwoImg from 'assets/images/about/teams/two.png'
import teamThreeImg from 'assets/images/about/teams/three.png'
import teamFourImg from 'assets/images/about/teams/four.png'
import teamFiveImg from 'assets/images/about/teams/five.png'
import teamSixImg from 'assets/images/about/teams/six.png'

import './slider-group-stiles.scss'

export const TeamMembersSlider = () => {
    const sliderRef = useRef<Slider | null>(null)

    return (
        <div className="team-r position-relative">
            <div className="team-s__slider slick-initialized slick-slider">
                <div className="slick-list draggable" style={{padding: '0px 0%'}}>
                    <div className="slick-track" style={{opacity: 1, width: '35000px', transform: 'translate3d(-3812px, 0px, 0px)'}}>
                        <div className="team-s__slider-single slick-slide slick-cloned" data-slick-index="-3" id="" aria-hidden="true">
                            <div className="team-wrap">
                                <div className="thumb">
                                    <a href="/team-single">
                                        <img src={teamOneImg} alt="Image" />
                                    </a>
                                    <div className="thumb__content">
                                        <div className="info">
                                            <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                                        </div>
                                        <h4>
                                            <a href="/team-single">Sana p. Lesh</a>
                                        </h4>
                                        <p>Senior engineer</p>
                                        <div className="social-alt">
                                            <SocialMenuList />
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="intro">
                                        <h5>
                                            <a href="/team-single">Hershel J. Jackson</a>
                                        </h5>
                                        <p>Sr. Product Designer</p>
                                    </div>
                                    <hr />
                                        <div className="inner">
                                            <p>Aenean sed fringilla purus, sed convallis sem. Morbi fringilla nulla tempus,
                                                cursus mauris in, placerat libero. Morbi tincidunt venenatis</p>
                                            <div className="skill-wrap">
                                                <div className="skill-bar-single">
                                                    <div className="skill-bar-title">
                                                        <p>Wireframe</p>
                                                    </div>
                                                    <div className="skill-bar-wrapper" data-percent="75%">
                                                        <div className="skill-bar">
                                                            <div className="skill-bar-percent" style={{width: '75%'}}>
                                                                <span className="percent-value">75%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="skill-bar-single">
                                                    <div className="skill-bar-title">
                                                        <p>Visual Design</p>
                                                    </div>
                                                    <div className="skill-bar-wrapper" data-percent="90%">
                                                        <div className="skill-bar">
                                                            <div className="skill-bar-percent" style={{width: '90%'}}>
                                                                <span className="percent-value">90%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Morbi non urna fringilla, luctus arcu vel, malesuada est. Vestibulum at lorem
                                                feugiat
                                            </p>
                                        </div>
                                        <div className="social">
                                            <SocialMenuList />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SliderGroupButton sliderRef={sliderRef} />
        </div>
    )
}