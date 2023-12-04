import React from 'react'

import { SearchInput } from 'shared/ui/inputs/FormInput'

import ThirteenImg from 'assets/images/blog/thirteen.png'
import FourteenImg from 'assets/images/blog/fourteen.png'
import ElevenImg from 'assets/images/blog/eleven.png'
import TwelveImg from 'assets/images/blog/twelve.png'
import TenImg from 'assets/images/blog/ten.png'

export const BlogRightContent = () => {
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
                        <div className="latest-single ">
                            <div className="latest-thumb">
                                <a href="/blog-single">
                                    <img src={TenImg} alt="Image" />
                                </a>
                            </div>
                            <div className="latest-content">
                                <p>10/01/2023</p>
                                <p>
                                    <a href="/blog-single">
                                        Guide dog shortage: The blind peo ple who train
                                        their own guide
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="latest-single ">
                            <div className="latest-thumb">
                                <a href="/blog-single">
                                    <img src={ElevenImg} alt="Image" />
                                </a>
                            </div>
                            <div className="latest-content">
                                <p>10/01/2023</p>
                                <p>
                                    <a href="/blog-single">
                                        Guide dog shortage: The blind peo ple who train
                                        their own guide
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="latest-single ">
                            <div className="latest-thumb">
                                <a href="/blog-single">
                                    <img src={TwelveImg} alt="Image" />
                                </a>
                            </div>
                            <div className="latest-content">
                                <p>10/01/2023</p>
                                <p>
                                    <a href="/blog-single">
                                        Guide dog shortage: The blind peo ple who train
                                        their own guide
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="latest-single ">
                            <div className="latest-thumb">
                                <a href="/blog-single">
                                    <img src={ThirteenImg} alt="Image" />
                                </a>
                            </div>
                            <div className="latest-content">
                                <p>10/01/2023</p>
                                <p>
                                    <a href="/blog-single">
                                        Guide dog shortage: The blind peo ple who train
                                        their own guide
                                    </a>
                                </p>
                            </div>
                        </div>
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