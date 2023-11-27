import React from 'react'

export const BlogPost: React.FC<{
    img: string
    author: string
    date: string
    videoLink: string
}> = ({ img, author, date, videoLink }) => (
    <div className="blog-main__single fade-top">
        <div className="thumb">
            <div className="thumb-link">
                <a href="/blog-single">
                    <img src={img} alt="Image" />
                </a>
                {videoLink && (
                    <div className="video-wrap">
                        <a href={videoLink} target="_blank" title="video Player" className="video-btn">
                            <i className="fa-sharp fa-solid fa-play"></i>
                        </a>
                    </div>
                )}
            </div>
            <div className="meta">
                <div className="meta__left">
                    <p>
                        <strong>Written by :</strong>
                        {author}
                    </p>
                    <span></span>
                    <p>{date}</p>
                </div>
            </div>
        </div>
        <div className="content">
            {/* ... Content ... */}
        </div>
    </div>
)

export default BlogPost