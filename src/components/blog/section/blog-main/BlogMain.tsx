import React from 'react'
import { BlogRightContent } from './BlogRightContent'
import { BlogLeftContent } from './BlogLeftContent'

export const BlogMain = () => {
    return (
        <section className="section blog-main fade-wrapper">
            <div className="container">
                <div className="row gaper">
                    <BlogLeftContent />
                    <BlogRightContent />
                </div>
            </div>
        </section>
    )
}