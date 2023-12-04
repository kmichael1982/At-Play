import React from 'react'
import './ux-process-styles.scss'

export const UxProcess = () => {
    return (
        <section className="section ux-process fade-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="section__header text-center">
                              <span className="sub-title">
                                 UX Process
                                 <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            <h2 className="title title-anim">
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="service-f-wrapper">
                            <div className="service-f-single fade-top" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}>
                                <div className="single-item single-item-active">
                                    <div className="intro-btn">
                                        <h4>User Research</h4>
                                    </div>
                                </div>
                                <div className="single-item p-single p-sm body-cn" style={{display: 'none'}}>
                                    <p>To deliver the best experience, we thoroughly research and evaluate your product
                                        and its users to create a strategic foundation for the brand.</p>
                                </div>
                                <button className="toggle-service-f"></button>
                            </div>
                            <div className="service-f-single fade-top" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}>
                                <div className="single-item single-item-active">
                                    <div className="intro-btn">
                                        <h4>story board</h4>
                                    </div>
                                </div>
                                <div className="single-item p-single p-sm body-cn" style={{display: 'none'}}>
                                    <p>To deliver the best experience, we thoroughly research and evaluate your product
                                        and its users to create a strategic foundation for the brand.</p>
                                </div>
                                <button className="toggle-service-f"></button>
                            </div>
                            <div className="service-f-single fade-top" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}>
                                <div className="single-item single-item-active">
                                    <div className="intro-btn">
                                        <h4>wireframing</h4>
                                    </div>
                                </div>
                                <div className="single-item p-single p-sm body-cn" style={{display: 'none'}}>
                                    <p>To deliver the best experience, we thoroughly research and evaluate your product
                                        and its users to create a strategic foundation for the brand.</p>
                                </div>
                                <button className="toggle-service-f"></button>
                            </div>
                            <div className="service-f-single fade-top service-f-single-active" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}>
                                <div className="single-item single-item-active">
                                    <div className="intro-btn">
                                        <h4>Prototyping</h4>
                                    </div>
                                </div>
                                <div className="single-item p-single p-sm body-cn" style={{display: 'block'}}>
                                    <p>To deliver the best experience, we thoroughly research and evaluate your product
                                        and its users to create a strategic foundation for the brand.</p>
                                </div>
                                <button className="toggle-service-f"></button>
                            </div>
                            <div className="service-f-single fade-top" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}>
                                <div className="single-item single-item-active">
                                    <div className="intro-btn">
                                        <h4>usability testing</h4>
                                    </div>
                                </div>
                                <div className="single-item p-single p-sm body-cn">
                                    <p>To deliver the best experience, we thoroughly research and evaluate your product
                                        and its users to create a strategic foundation for the brand.</p>
                                </div>
                                <button className="toggle-service-f"></button>
                            </div>
                            <div className="service-f-single fade-top" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}>
                                <div className="single-item single-item-active">
                                    <div className="intro-btn">
                                        <h4>UI Design</h4>
                                    </div>
                                </div>
                                <div className="single-item p-single p-sm body-cn">
                                    <p>To deliver the best experience, we thoroughly research and evaluate your product
                                        and its users to create a strategic foundation for the brand.</p>
                                </div>
                                <button className="toggle-service-f"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}