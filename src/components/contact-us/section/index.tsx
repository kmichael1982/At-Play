import React, { useEffect, useRef } from 'react'
import MailImg from 'assets/images/contact/mail.png'
import LocationImg from 'assets/images/contact/location.png'
import PhoneImg from 'assets/images/contact/phone.png'
import TimeImg from 'assets/images/contact/time.png'
import ContactInfo from './contact-info/ContactInfo'
import ContactAddress from './contact-address/ContactAddress'
import './contact-styles.scss'
import { ContactForm } from './contact-form/ContactForm'
import { animateItem } from 'shared/ui/design/animation/animateItem'

export const ContactUsPages = () => {
    const contactInfoItemRef = useRef<HTMLDivElement | null>(null)
    const contactFormItemRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        animateItem(contactInfoItemRef)
        animateItem(contactFormItemRef)
    }, [])

    return (
        <section className="section contact-m fade-wrapper">
            <div className="container">
                <div className="row gaper" ref={contactInfoItemRef}>
                    <ContactInfo
                        icon={PhoneImg}
                        title="Phone & Fax"
                        lines={[
                            { href: 'tel:197-90-56-780', text: 'Mobile : +197-90-56-780' },
                            { href: 'tel:197-90-56-780', text: 'Fax : +44-208-1234567' },
                        ]}
                    />
                    <ContactInfo
                        icon={MailImg}
                        title="Mail Address"
                        lines={[
                            { href: 'mailto:info.company@gmail.com', text: 'Info.company@gmail.com' },
                            { href: 'mailto:info.company@gmail.com', text: 'Info.company@yahoo.com' },
                        ]}
                    />
                    <ContactInfo
                        icon={LocationImg}
                        title="Our Location"
                        lines={[
                            {
                                href: 'https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&amp;hl=en_US&amp;ll=18.672105000000013%2C105.68673800000003&amp;z=17',
                                text: '85 Ketch Harbour Road Bensalem, PA 19020',
                            },
                        ]}
                    />

                    <ContactInfo
                        icon={TimeImg}
                        title="Office Hour"
                        lines={[
                            { text: 'Sun - Thu 09 am - 06pm' },
                            { text: 'Fri - Sat 4 pm - 10pm' }
                        ]}
                    />
                </div >

                <div className="">
                    <div className="col-12">
                        <div className="map-wrapper">
                            <div className="row gaper" >
                                <div className="col-12 col-lg-6">
                                    <ContactAddress />
                                </div>
                                <div className="col-12 col-lg-6" ref={contactFormItemRef}>
                                    <div
                                        className="contact-main__form  fade-top"
                                        style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}
                                    >
                                        <h3>Leave A Message</h3>
                                    <ContactForm />
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