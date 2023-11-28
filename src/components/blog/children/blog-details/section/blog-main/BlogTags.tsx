import React from 'react'

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
            <ul className="social">
                <li>
                    <a href="index" aria-label="social media">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="index" aria-label="social media">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="index" aria-label="social media">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </li>
                <li>
                    <a href="index" aria-label="social media">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
)