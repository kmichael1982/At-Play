 import React from 'react'
 import Logo from 'assets/images/image-removebg-preview.png'
import { Buttons, LinkButton, SocialLinkButton } from 'shared/ui/buttons/ButtonUi'
import { SearchInput } from 'shared/ui/inputs/FormInput'
import '../footer-styles.scss'

interface FooterProps {
    background?: string
}

const PrimaryFooter: React.FC<FooterProps> = ({ background }) => {
    const footerStyle: React.CSSProperties = {
        backgroundImage: `url("${background}")`,
    }

    return (
        <footer className="footer section !pb-0 z-30"  style={footerStyle}>
            <div className="container">
                <div className="row gaper">
                    <div className="col-12 col-lg-5 col-xl-6">
                        <div className="footer__single">
                            <a href="#" className="logo">
                                <img src={Logo} className="h-16" alt="Image" />
                            </a>
                            <div className="footer__single-meta">
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
                            <Buttons title="book a call now"/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-2 col-xl-2">
                        <div className="footer__single">
                            <div className="footer__single-intro">
                                <h5 className="font-semibold capitalize">discover</h5>
                            </div>
                            <div className="footer__single-content">
                                <ul>
                                    <li>
                                        <LinkButton href='/about-us' label='About Us' />
                                    </li>
                                    <li>
                                        <LinkButton href='/client-feedback' label='Award Winning' />
                                    </li>
                                    <li>
                                        <LinkButton href='/blog' label='News &amp; Blog' />
                                    </li>
                                    <li>
                                        <LinkButton href='/contact-us' label='careers' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 col-xl-4">
                        <div className="footer__single">
                            <div className="footer__single-intro">
                                <h5 className="font-semibold capitalize">Subscribe our newsletter</h5>
                            </div>
                            <div className="footer__single-content">
                                <p className="font-normal text-start">Welcome to our digital agency We specialize in helping business most like yours
                                    succeed
                                    online.</p>
                                <div className="footer__single-form">
                                    <form action="#" method="post">
                                        <SearchInput
                                            placeholder='Enter Your Email'
                                            icon={<i className="fa fa-sharp fa-solid fa-paper-plane"></i>}
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="footer__copyright">
                            <div className="row align-items-center gaper">
                                <div className="col-12 col-lg-8">
                                    <div className="footer__copyright-text text-center text-lg-start">
                                        <p>
                                            Copyright ©
                                            <span id="copyYear">{(new Date().getFullYear())}</span>
                                            Xpovio by
                                            <LinkButton className='font-bold' label='GramenTheme' href='https://themeforest.net/user/gramentheme/' />
                                            . All Rights Reserved
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="social justify-content-center justify-content-lg-end">
                                        <SocialLinkButton
                                            href="https://www.facebook.com/"
                                            icon={<i className="fa-brands fa-facebook-f"></i>}
                                        />
                                        <SocialLinkButton
                                            href="https://www.twitter.com/"
                                            icon={<i className="fa-brands fa-twitter"></i>}
                                        />

                                        <SocialLinkButton
                                            href="https://www.pinterest.com/"
                                            icon={<i className="fa-brands fa-linkedin-in"></i>}
                                        />

                                        <SocialLinkButton
                                            href="https://www.instagram.com/"
                                            icon={<i className="fa-brands fa-instagram"></i>}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default PrimaryFooter
