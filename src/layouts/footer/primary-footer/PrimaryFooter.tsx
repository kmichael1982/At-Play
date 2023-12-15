 import React from 'react'

import { Buttons, LinkButton, SocialLinkButton } from 'shared/ui/buttons/ButtonUi'
import { SearchInput } from 'shared/ui/inputs/FormInput'

 import Logo from 'assets/images/image-removebg-preview.png'
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
                                    label='71- 75 Shelton Street London WC2H 9Jq | Gold & Diamond Business Park, Building 6, Dubai'
                                />

                                
                                <LinkButton
                                    href='mailto:info@atplay.marketing'
                                    icon={<i className="fa fa-sharp fa-solid fa-envelope"></i>}
                                    label='info@atplay.marketing'
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
                                        <LinkButton href='/blog' label='Journal' />
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
                                <p className="font-normal text-start">Welcome to our digital agency We specialise in helping business most like yours
                                    succeed online.</p>
                           
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
                                            <span id="copyYear" className="px-1">{(new Date().getFullYear())}</span>
                                            Atplay Marketing.
                                            
                                             All Rights Reserved.
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
