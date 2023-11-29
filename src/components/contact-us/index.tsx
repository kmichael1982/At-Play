import React from 'react'
import BreadCrumb from 'shared/ui/design/bread-crumbs/BreadCrumb'
import { ContactUsPages } from './section'

function ContactUsPage() {
    return (
        <main>
            <BreadCrumb
                title="contact us"
                description="We're an UK-based top-notch design agency committed to partnering with good companies and hiring the right people for the right roles."
            />
            <ContactUsPages />
        </main>
    )
}

export default ContactUsPage
