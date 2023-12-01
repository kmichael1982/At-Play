import React from 'react'

import BreadCrumb from 'shared/ui/design/bread-crumbs/BreadCrumb'
import { ErrorPageInfo } from './section/ErrorPageInfo'

export const ErrorPage = () => {
    return (
        <main>
            <BreadCrumb
                title="error"
                description="We're an UK-based top-notch design agency committed to partnering with good companies and hiring the right people for the right roles."
            />
            <ErrorPageInfo />
        </main>
    )
}