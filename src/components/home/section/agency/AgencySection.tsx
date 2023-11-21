import './agency-styles.scss'
import ThumbOneImg from 'assets/images/home/agency/thumb-one.png'
import ThumbTwoImg from 'assets/images/home/agency/thumb-two.png'
import StarIcon from 'assets/images/star.png'
import DotLargeIcon from 'assets/images/home/agency/dot-large.png'

function AgencySection() {
    return (
        <section className="py-32 px-0 agency">
            <div className="container px-4 mx-auto">
                <div className="flex items-center gap-7">
                    <div className="w-1/2 ">
                        <div className="agency__thumb">
                            <img
                                src={ThumbOneImg}
                                alt="Image"
                                className="thumb-one fade-left"
                                style={{translate: 'none', background: 'red', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}
                            />

                            <img
                                src={ThumbTwoImg}
                                alt="Image"
                                className="thumb-two fade-right"
                                style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}
                            />
                        </div>
                    </div>
                    <div className="w-1/2 ">
                        <div className="agency__content section__content">
                              <span className="sub-title">
                                 WELCOME
                                 <i className="fa-solid fa-arrow-right"></i>
                              </span>
                                <div className="paragraph">
                                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At
                                        the end of the day, going forward, a new normal that has evolved from generation on
                                        the runway heading towards a streamlined cloud solution going forward porttitor
                                        dictum sapien.</p>
                                </div>
                            <div className="skill-wrap">
                                <div className="skill-bar-single">
                                    <div className="skill-bar-title">
                                        <p className="primary-text">Website design</p>
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
                                        <p className="primary-text">Digital Marketing</p>
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
                            <div className="section__content-cta">
                                <a href="/about-us" className="btn btn--primary">Know More</a>
                            </div>
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
