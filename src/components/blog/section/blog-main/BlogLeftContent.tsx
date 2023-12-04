import React from 'react'

import NineImg from 'assets/images/blog/nine.png'
import EightImg from 'assets/images/blog/eight.png'
import BlogItem from './blog-item/BlogItem'

export const BlogLeftContent = () => {
    return (
        <div className="col-12 col-xl-8">
            <div className="blog-main__content">
                <BlogItem
                    topElem={
                        <div className="thumb-link">
                            <a href="/blog-single">
                                <img src={EightImg} alt="Image" />
                            </a>
                        </div>
                    }
                    author="Marry biden"
                    date="10/01/2023"
                    categoryOne="Nature"
                    categoryTwo="Health"
                    title="Guide dog shortage: The blind people who train their"
                    content="Daily Star News published on Feb 2nd, 2022, Sangbad Protidin dated January 31st, 2022 and HRCBM's investigation. Bangladesh again witnessing uptick in violence against minorities in the country."
                />

                <BlogItem
                    topElem={
                        <div className="thumb-link">
                            <a href="/blog-single">
                                <img src={NineImg} alt="Image" />
                            </a>
                            <div className="video-wrap">
                                <a href="https://www.youtube.com/watch?v=RvreULjnzFo" target="_blank" title="video Player" className="video-btn">
                                    <i className="fa-sharp fa-solid fa-play"></i>
                                </a>
                            </div>
                        </div>
                    }
                    author="Marry biden"
                    date="10/01/2023"
                    categoryOne="Nature"
                    categoryTwo="Health"
                    title="A team of scientists from NASA's Jet Propulsion"
                    content="Daily Star News published on Feb 2nd, 2022, Sangbad Protidin dated January 31st, 2022 and HRCBM's investigation. Bangladesh again witnessing uptick in violence against minorities in the country."
                />

                <BlogItem
                    topElem={
                        <div className="thumb-radio">
                            <h4 className="h4">Insert Audio Title Here</h4>
                            <div className="radio">
                                <div className="audio-player">
                                    <audio controls={true}>
                                        <source src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3" type="audio/mp3" />
                                    </audio>
                                </div>
                            </div>
                        </div>
                    }
                    author="Marry biden"
                    date="10/01/2023"
                    categoryOne="Nature"
                    categoryTwo="Health"
                    title="A team of scientists from NASA's Jet Propulsion"
                    content="Daily Star News published on Feb 2nd, 2022, Sangbad Protidin dated January 31st, 2022 and HRCBM's investigation. Bangladesh again witnessing uptick in violence against minorities in the country."
                />

                <div className="pagination-wrapper">
                    <ul className="pagination">
                        <li>
                            <a href="/blog">01</a>
                        </li>
                        <li>
                            <a href="/blog" className="active">02</a>
                        </li>
                        <li>
                            <a href="/blog">03</a>
                        </li>
                        <li>
                            <button>
                                {/*<i className="fa-sharp fa-regular fa-arrow-right"></i>*/}
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}