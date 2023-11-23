import React from 'react'
import AgencySection from 'components/home/section/agency/AgencySection'
import BannerSection from 'components/home/section/banner/BannerSection'
import BlogSection from 'components/home/section/blog/BlogSection'
import NextPageSection from 'components/home/section/next-page/NextPageSection'
import OfferSection from 'components/home/section/offer/OfferSection'
import PortfolioSection from 'components/home/section/portfolio/PortfolioSection'
import SponsorSection from 'components/home/section/sponsor/SponsorSection'
import TestimonialSection from 'components/home/section/testimonial/TestimonialSection'
import './slick-slider-style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function HomePage() {
    return (
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
    )
}

export default HomePage
