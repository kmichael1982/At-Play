import React from 'react'
import BreadCrumb from 'shared/ui/design/bread-crumbs/BreadCrumb'
import { CtaStart } from 'components/services/section/cta-start/CtaStart'
import { WorkStepsStart } from './section/work-steps/WorkStepsStart'
import { PinSpacer } from './section/pin-spacer/PinSpacer'

import './project-styles.scss'

export const OurProjectsPage = () => {
    return (
        <main>
            <BreadCrumb
                title="OUR PROJECTS"
                description="We're an UK-based top-notch design agency committed to partnering with good companies and hiring the right people for the right roles."
            />
            <PinSpacer />
            <WorkStepsStart />
            <CtaStart />
        </main>
    )
}