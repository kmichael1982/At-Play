import React from 'react'

import BreadCrumb from 'shared/ui/design/bread-crumbs/BreadCrumb'
import { PortfolioPageInfo } from './section/PortfolioPageInfo'

export const PortfolioPage = () => {
    return (
        <main>
            <BreadCrumb
                title="PORTFOLIO GALLERY"
                description="We're an UK-based top-notch design agency committed to partnering with good companies and hiring the right people for the right roles."
            />

            <PortfolioPageInfo />
        </main>
    )
}