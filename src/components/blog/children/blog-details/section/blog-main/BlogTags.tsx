import React from 'react'
import SocialMenuList from 'shared/ui/design/social-list/SocialMenuList'

export const BlogTags = () => (
    <div className="bd-tags">
        <div className="tags-left">
            <p>Tags:</p>
            <div className="tags-content">
                <a href="/blog">Nature</a>
                <a href="/blog">Health</a>
            </div>
        </div>
        <div className="tags-right">
            <p>Share:</p>
            <SocialMenuList />
        </div>
    </div>
)