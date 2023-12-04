import React from 'react'

import VideoModal from 'shared/ui/video-modal/VideoModal'
import AgencySection from 'components/home/section/agency/AgencySection'
import BannerSection from 'components/home/section/banner/BannerSection'
import BlogSection from 'components/home/section/blog/BlogSection'
import NextPageSection from 'components/home/section/next-page/NextPageSection'
import OfferSection from 'components/home/section/offer/OfferSection'
import PortfolioSection from 'components/home/section/portfolio/PortfolioSection'
import SponsorSection from 'components/home/section/sponsor/SponsorSection'
import TestimonialSection from 'components/home/section/testimonial/TestimonialSection'
import PrimaryNavbar from 'layouts/header/primary-header/PrimaryNavbar'
import PrimaryFooter from 'layouts/footer/primary-footer/PrimaryFooter'

import FooterImg from 'assets/images/footer/footer-bg.png'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

function HomePage() {
    return (
        <>
            <PrimaryNavbar />
                <main>
                   <BannerSection />
                   <AgencySection />
                   <PortfolioSection />
                   <OfferSection />
                   <TestimonialSection />
                   <BlogSection />
                   <SponsorSection />
                   <NextPageSection />
                </main>
            <VideoModal />
            <PrimaryFooter background={FooterImg}/>
       </>
    )
}

export default HomePage