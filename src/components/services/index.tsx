import React from 'react'

import BreadCrumb from 'shared/ui/design/bread-crumbs/BreadCrumb'
import { VideoModal } from 'components/about/section/vide-modal/VideoModal'
import { ServiceTableSlider } from './section/service-table-slider/ServiceTableSlider'
import { UxProcess } from './section/ux-process/UxProcess'

import { CtaStart } from './section/cta-start/CtaStart'
import BgVideoFrameImage from 'assets/images/about/video-frame-two.png'

function ServicesPage() {
    return (
        <main>
            <BreadCrumb
                title="OUR SERVICES"
                description="We're an UK-based top-notch design agency committed to partnering with good companies and hiring the right people for the right roles."
            />
            <ServiceTableSlider />
            <VideoModal imageSrc={BgVideoFrameImage} />
            <UxProcess />
            <CtaStart />
        </main>
    )
}

export default ServicesPage