import React from 'react'

import BreadCrumb from 'shared/ui/design/bread-crumbs/BreadCrumb'

import TestimonialSection from '../home/section/testimonial/TestimonialSection'
import SponsorSection from '../home/section/sponsor/SponsorSection'
import AgencySection from '../home/section/agency/AgencySection'
import { TeamMembers } from './section/team-members/TeamMembers'
import { VideoModal } from './section/vide-modal/VideoModal'
import { CtaStart } from './section/cta-start/CtaStart'

import BgVideoFrameImage from 'assets/images/about/video-frame-two.png'
import './about-styles.scss'
import './section/cta-start-styles.scss'

function AboutUsPage() {
    return (
        <main>
            <BreadCrumb
                title="About us"
                description="We're a UK-based top-notch creative marketing agency committed to partnering with companies enabling them to use our specialist marketing services."
            />
            <VideoModal imageSrc={BgVideoFrameImage} />
            <AgencySection />
            <TeamMembers />
            <TestimonialSection isActive={false}/>
            <SponsorSection isActive={false}/>
            <CtaStart />
        </main>
    )
}

export default AboutUsPage
