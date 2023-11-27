import React from 'react'
import BreadCrumb from 'shared/ui/design/bread-crumbs/BreadCrumb'
import { BlogMain } from './section/blog-main/BlogMain'
import './blog-styles.scss'

function BlogStandardPage() {
    return (
        <main>
            <BreadCrumb
                title="Blog Standard"
                description="We're an UK-based top-notch design agency committed to partnering with good companies and hiring the right people for the right roles."
            />
            <BlogMain />
        </main>
    )
}

export default BlogStandardPage
