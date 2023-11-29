import React from 'react'
import './footer-styles.scss'
import { LinkButton } from 'shared/ui/buttons/ButtonUi'
import Logo from 'assets/images/image-removebg-preview.png'
import TextAnimation from 'shared/ui/design/animation/TextAnimation'

const Footer = () => {
    return (
        <footer className="footer-two footer-cmn section !pb-0">
            <div className="container">
                <div className="row gaper" >
                    <div className="col-12 col-lg-5 col-xl-4">
                        <div className="footer-two__left">
                            <div className="logo">
                                <a href="/">
                                    <img src={Logo} className="h-14" alt="Image" />
                                </a>
                            </div>
                            <div className="paragraph">
                                <p>Welcome to our digital agency We specialize in helping business most like yours succeed
                                    online. From website design and development.</p>
                            </div>
                            <div className="section__content-cta">
                                <TextAnimation />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 col-xl-7 offset-xl-1 col-xxl-5 offset-xxl-3">
                        <div className="footer-two__right">
                            <div className="social justify-content-start justify-content-lg-start">
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i className="fa-brands fa-facebook-f"></i>
                                    <span>Facebook</span>
                                </a>
                                <a href="https://www.twitter.com/" target="_blank">
                                    <i className="fa-brands fa-twitter"></i>
                                    <span>Twitter</span>
                                </a>
                                <a href="https://www.pinterest.com/" target="_blank">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                    <span>Linkedin</span>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i className="fa-brands fa-instagram"></i>
                                    <span>Instagram</span>
                                </a>
                                <a href="https://www.dribble.com/" target="_blank">
                                    <i className="fa-light fa-basketball"></i>
                                    <span>Dribble</span>
                                </a>
                            </div>
                            <div className="footer__single-meta section__content-cta">
                                <LinkButton
                                    href='https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&amp;hl=en_US&amp;ll=18.672105000000013%2C105.68673800000003&amp;z=17'
                                    icon={<i className="fa-sharp fa-solid fa-location-dot"></i>}
                                    label='901 N Pitt Str., Suite 170 Alexandria, USA'
                                />

                                <LinkButton
                                    href='tel:406-555-0120'
                                    icon={<i className="fa fa-sharp fa-solid fa-phone-volume"></i>}
                                    label='(406) 555-0120'
                                />

                                <LinkButton
                                    href='mailto:info@xpovio.com'
                                    icon={<i className="fa fa-sharp fa-solid fa-envelope"></i>}
                                    label='info@xpovio.com'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <div className="container">
                    <div className="row align-items-center gaper">
                        <div className="col-12 col-xl-6">
                            <div className="footer__copyright-text text-center text-xl-start">
                                <p>
                                    Copyright ©
                                    <span id="copyYear">{(new Date().getFullYear())}</span>
                                    Xpovio by
                                    <LinkButton className='font-bold px-2' label='GramenTheme' href='https://themeforest.net/user/gramentheme/' />
                                    . All Rights Reserved
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6">
                            <ul className="justify-content-center justify-content-xl-end">
                                <li>
                                    <LinkButton href='/' label='Home' />
                                </li>
                                <li>
                                    <LinkButton href='/about-us' label='About us' />
                                </li>
                                <li>
                                    <LinkButton href='/our-services' label='Services' />
                                </li>
                                <li>
                                    <LinkButton href='/blog' label='Blog' />
                                </li>
                                <li>
                                    <LinkButton href='/contact-us' label='Contact' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer