import React from 'react'

import { BlogRightContent } from 'components/blog/section/blog-main/BlogRightContent'
import { BlogDetailsLeftContent } from '../../BlogDetailsLeftContent'

export const BlogDetailsMain = () => {
    return (
        <section className="section blog-main blog-details fade-wrapper">
            <div className="container">
                <div className="row gaper">
                    <BlogDetailsLeftContent />
                    <BlogRightContent />
                </div>
            </div>
        </section>
    )
}