import React from 'react'

import BreadCrumb from 'shared/ui/design/bread-crumbs/BreadCrumb'
import { BlogDetailsMain } from './section/blog-main/BlogMain'

import './blog-details-styles.scss'
import '../../blog-styles.scss'

function BlogDetailsPage() {
    return (
        <main>
            <BreadCrumb
                href="WE DENOUNCE WITH RIGHTEOUS INDIGNATION"
                title="blog details"
            />
            <BlogDetailsMain />
        </main>
    )
}

export default BlogDetailsPage