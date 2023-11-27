import React from 'react'
import ErrorImg from 'assets/images/error/error-thumb.png'
import { Buttons } from 'shared/ui/buttons/ButtonUi'
import './error-styles.scss'

export const ErrorPageInfo = () => {
    return (
        <section className="section error fade-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-7">
                        <div className="error__content text-center fade-top" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}>
                            <span className="secondary-text">ERROR</span>
                            <div className="thumb">
                                <img src={ErrorImg} className="mx-auto" alt="Image" />
                            </div>
                            <h2>page not found</h2>
                            <div className="section__content-cta">
                                <Buttons title="back to home" href="/"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}