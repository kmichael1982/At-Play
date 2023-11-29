import React from 'react'
import CtaBgImg from 'assets/images/services/cta-two-bg.png'
import './cta-style.scss'
import TextAnimation from 'utils/hooks/useAnimatetText'
import { LinkButton } from 'shared/ui/buttons/ButtonUi'

export const CtaStart = () => {
    return (
        <section className="cta-two section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xxl-11">
                        <div className="cta-two-wrapper bg-img" data-background="assets/images/cta-bg.png" style={{backgroundImage: `url(${CtaBgImg})`}}>
                            <div className="row gaper align-items-center">
                                <div className="col-12 col-lg-8">
                                    <div className="cta-two__content">
                                        <span>Hello !</span>
                                        <h2 className="title-anim">
                                            <TextAnimation text="READY" />
                                            <TextAnimation text="TO" />
                                            <TextAnimation text="WORK" />
                                            <TextAnimation text="WITH" />
                                            <TextAnimation text="US?" />
                                        </h2>
                                        <h5>
                                            <a href="tel:19-3265-003-420">call: +19 3265 003 420</a>
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="text-start text-lg-end">
                                        <LinkButton
                                            href="/contact-us"
                                            label="start a project"
                                            className="btn btn--tertiary"
                                            isLink={true}
                                            icon={<i className="fa-solid fa-arrow-right"></i>}
                                        />
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