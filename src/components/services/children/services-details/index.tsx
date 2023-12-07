import React from 'react'
import { useLocation } from 'react-router-dom'

import BreadCrumb from 'shared/ui/design/bread-crumbs/BreadCrumb'
import { ServicesDetailsInfo } from './service-details-info/ServicesDetailsInfo'
import { UxProcess } from '../../section/ux-process/UxProcess'
import { CtaStart } from '../../section/cta-start/CtaStart'

function ServicesDetailsPage() {
    const location = useLocation()

    return (
        <main>
            <BreadCrumb
                title={location.search}
                pathName={location.pathname}
                description="We're an UK-based top-notch design agency committed to partnering with good companies and hiring the right people for the right roles."
            />
            <ServicesDetailsInfo />
            <UxProcess className="bg-tertiary"/>
            <CtaStart />
        </main>
    )
}

export default ServicesDetailsPage