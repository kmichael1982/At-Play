import React from 'react'

import { SearchInput } from 'shared/ui/inputs/FormInput'
import { RecentPost } from './recent-post/RecentPost'

import ThirteenImg from 'assets/images/blog/thirteen.png'
import FourteenImg from 'assets/images/blog/fourteen.png'
import ElevenImg from 'assets/images/blog/eleven.png'
import TwelveImg from 'assets/images/blog/twelve.png'
import TenImg from 'assets/images/blog/ten.png'

export const BlogRightContent = () => {
    const recentPosts = [
        { date: '10/01/2023', image: TenImg, title: 'Guide dog shortage: The blind people who train their own guide', link: '/blog-single' },
        { date: '10/01/2023', image: ElevenImg, title: 'Guide dog shortage: The blind people who train their own guide', link: '/blog-single' },
        { date: '10/01/2023', image: TwelveImg, title: 'Guide dog shortage: The blind people who train their own guide', link: '/blog-single' },
        { date: '10/01/2023', image: ThirteenImg, title: 'Guide dog shortage: The blind people who train their own guide', link: '/blog-single' },
    ]

    return (
        <div className="col-12 col-xl-4">
            <div className="blog-main__sidebar">
                <div className="widget">
                    <div className="widget__head">
                        <h5 className="h5">Search</h5>
                    </div>
                    <div className="widget-search">
                        <form action="#" method="post">
                            <SearchInput
                                placeholder="Search here. . ."
                                icon={<i className="fa-solid fa-magnifying-glass"></i>}
                            />
                        </form>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget__head">
                        <h5 className="h5">Categories</h5>
                    </div>
                    <div className="widget__list">
                        <ul>
                            <li>
                                <a href="/blog">Business</a>
                            </li>
                            <li>
                                <a href="/blog">Job Market</a>
                            </li>
                            <li>
                                <a href="/blog">Marketing</a>
                            </li>
                            <li>
                                <a href="/blog">News</a>
                            </li>
                            <li>
                                <a href="/blog">Social Media</a>
                            </li>
                            <li>
                                <a href="/blog">Trends</a>
                            </li>
                            <li>
                                <a href="/blog">Writing</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget">
                    <div className="widget__head">
                        <h5 className="h5">Recent Posts</h5>
                    </div>
                    <div className="widget__latest">
                        {recentPosts.map((post, index) => (
                            <RecentPost key={index} {...post} />
                        ))}
                    </div>
                </div>
                <div className="widget ">
                    <div className="widget__head">
                        <h5 className="h5">Tags</h5>
                    </div>
                    <div className="widget__tags">
                        <ul>
                            <li>
                                <a href="/blog">nature</a>
                            </li>
                            <li>
                                <a href="/blog">health</a>
                            </li>
                            <li>
                                <a href="/blog">galaxy</a>
                            </li>
                            <li>
                                <a href="/blog">creative</a>
                            </li>
                            <li>
                                <a href="/blog">art</a>
                            </li>
                            <li>
                                <a href="/blog">business</a>
                            </li>
                            <li>
                                <a href="/blog">space</a>
                            </li>
                            <li>
                                <a href="/blog">biology</a>
                            </li>
                            <li>
                                <a href="/blog">environemnt</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget widget-big ">
                    <a href="/blog-single">
                        <img src={FourteenImg} alt="Image" />
                    </a>
                </div>
            </div>
        </div>
    )
}