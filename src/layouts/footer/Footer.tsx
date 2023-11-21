import React from 'react'
import { footer, container } from './footer'
import Logo from 'assets/For Web/svg/Color logo - no background.svg'
import { Buttons, LinkButton, SocialLinkButton } from 'shared/ui/buttons/ButtonUi'
import { SearchInput } from 'shared/ui/inputs/FormInput'

interface FooterProps {
    background?: string
}

const Footer: React.FC<FooterProps> = ({ background }) => {
    const footerStyle: React.CSSProperties = {
        backgroundImage: `url("${background}")`,
    }

    return (
        <footer className={footer} style={footerStyle}>
            <div className={container}>
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-6 text-white">
                        <div className="">
                            <a href="#" className="logo">
                                <img src={Logo} className="w-48 h-16" alt="Image" />
                            </a>
                            <div className="flex items-center gap-6 flex-wrap mt-7 mb-10 mx-0">
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

                            <div className="footer__cta text-start">
                                <Buttons
                                    title="book a call now"
                                    className=''
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 text-white">
                        <div className="flex flex-col gap-4 items-start">
                            <div className="footer__single-intro">
                                <h5 className="font-semibold capitalize">discover</h5>
                            </div>
                            <div className="flex flex-col gap-3">
                                <ul className="flex flex-col gap-3 items-start">
                                    <li className="text-light">
                                        <LinkButton href='about-us' label='About Us' />
                                    </li>
                                    <li className="text-light">
                                        <LinkButton href='client-feedback' label='Award Winning' />
                                    </li>
                                    <li className="text-light">
                                        <LinkButton href='blog' label='News &amp; Blog' />
                                    </li>
                                    <li className="text-light">
                                        <LinkButton href='contact-us' label='careers' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 w-1/3 text-white">
                        <div className="flex flex-col gap-7 items-start">
                            <div className="">
                                <h5 className="font-semibold capitalize">Subscribe our newsletter</h5>
                            </div>
                            <div className="flex flex-col gap-7 items-start">
                                <p className="font-normal text-start">Welcome to our digital agency We specialize in helping business most like yours
                                    succeed
                                    online.</p>
                                <div className="w-full">
                                    <form action="#" method="post">
                                        <SearchInput
                                            placeholder='Enter Your Email'
                                            className='bg-black border-2 py-4 px-7 border-[#c1c1c1] text-gray-600'
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
                        <div className="py-16 px-0">
                            <div className="flex items-center justify-between flex-wrap">
                                <div className="col-12 col-lg-8">
                                    <div className="text-secondary-color flex text-center font-light text-lg-start">
                                        <p className="flex items-center gap-2">
                                            Copyright ©
                                            <span id="copyYear">{(new Date().getFullYear())}</span>
                                            Xpovio by
                                            <LinkButton className='font-bold' label='GramenTheme' href='https://themeforest.net/user/gramentheme/' />
                                            . All Rights Reserved
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="flex justify-end items-center gap-6">
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

export default Footer
