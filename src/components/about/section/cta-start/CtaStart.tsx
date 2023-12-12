import React from 'react'

import { SearchInput } from 'shared/ui/inputs/FormInput'
import TextAnimation from 'utils/hooks/useAnimatetText'

import StarIcon from 'assets/images/about/star.png'
import CtaBgImg from 'assets/images/about/cta-bg.png'

export const CtaStart = () => {
    return (
        <section className="cta-s section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cta__wrapper" data-background="assets/images/cta-bg.png" style={{backgroundImage: `url(${CtaBgImg})`}}>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-9">
                                    <div className="section__header text-center">
                                        <h2 className="title title-anim">
                                            <TextAnimation text="Stay Ahead With Our Top Notch Marketing Services" />
                                        </h2>
                                    </div>
                                    <div className="footer__single-form">
                                        <form action="#" method="post">
                                            <SearchInput
                                                placeholder="Enter Your Email"
                                                icon={<i className="fa fa-sharp fa-solid fa-paper-plane"></i>}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <img src={StarIcon}alt="Image" className="star" />
                            <img src={StarIcon} alt="Image" className="star-two" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
