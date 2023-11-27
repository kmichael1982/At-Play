import React from 'react'
import EightImg from 'assets/images/blog/eight.png'
import NineImg from 'assets/images/blog/nine.png'
import TenImg from 'assets/images/blog/ten.png'
import FourteenImg from 'assets/images/blog/fourteen.png'
import ElevenImg from 'assets/images/blog/eleven.png'
import TwelveImg from 'assets/images/blog/twelve.png'
import ThirteenImg from 'assets/images/blog/thirteen.png'
import { SearchInput } from 'shared/ui/inputs/FormInput'

export const BlogMain = () => {
    return (
        <section className="section blog-main fade-wrapper">
            <div className="container">
                <div className="row gaper">
                    <div className="col-12 col-xl-8">
                        <div className="blog-main__content">
                            <div className="blog-main__single fade-top" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}>
                                <div className="thumb">
                                    <div className="thumb-link ">
                                        <a href="/blog-single">
                                            <img src={EightImg} alt="Image" />
                                        </a>
                                    </div>
                                    <div className="meta">
                                        <div className="meta__left">
                                            <p>
                                                <strong>Written by :</strong>
                                                Marry biden
                                            </p>
                                            <span></span>
                                            <p>10/01/2023</p>
                                        </div>
                                        <div className="meta__right">
                                            <a href="/blog">Nature</a>
                                            <a href="/blog">Health</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="content ">
                                    <h4 className="h4">
                                        <a href="/blog-single">
                                            Guide dog shortage: The blind people who train their
                                        </a>
                                    </h4>
                                    <p>
                                        Daily Star News published on Feb 2nd, 2022, Sangbad
                                        Protidin dated January 31st, 2022 and HRCBM's
                                        investigation. Bangladesh again witnessing uptick in
                                        violence against minorities in the country.
                                    </p>
                                    <div className="cta">
                                        <a href="/blog-single">
                                            {/*<i className="fa-sharp fa-regular fa-arrow-right"></i>*/}
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-main__single fade-top" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}>
                                <div className="thumb">
                                    <div className="thumb-link ">
                                        <a href="/blog-single">
                                            <img src={NineImg} alt="Image" />
                                        </a>
                                        <div className="video-wrap">
                                            <a href="https://www.youtube.com/watch?v=RvreULjnzFo" target="_blank" title="video Player" className="video-btn">
                                                <i className="fa-sharp fa-solid fa-play"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="meta">
                                        <div className="meta__left">
                                            <p>
                                                <strong>Written by :</strong>
                                                Marry biden
                                            </p>
                                            <span></span>
                                            <p>10/01/2023</p>
                                        </div>
                                        <div className="meta__right">
                                            <a href="/blog">Nature</a>
                                            <a href="/blog">Health</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="content ">
                                    <h4 className="h4">
                                        <a href="/blog-single">
                                            A team of scientists from NASA's Jet Propulsion
                                        </a>
                                    </h4>
                                    <p>
                                        Daily Star News published on Feb 2nd, 2022, Sangbad
                                        Protidin dated January 31st, 2022 and HRCBM's
                                        investigation. Bangladesh again witnessing uptick in
                                        violence against minorities in the country.
                                    </p>
                                    <div className="cta">
                                        <a href="/blog-single">
                                            {/*<i className="fa-sharp fa-regular fa-arrow-right"></i>*/}
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-main__single fade-top" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1}}>
                                <div className="thumb">
                                    <div className="thumb-radio ">
                                        <h4 className="h4">Insert Audio Title Here</h4>
                                        <div className="radio">
                                            <div className="audio-player">
                                                <audio controls={true}>
                                                    <source src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3" type="audio/mp3" />
                                                </audio>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="meta">
                                        <div className="meta__left">
                                            <p>
                                                <strong>Written by :</strong>
                                                Marry biden
                                            </p>
                                            <span></span>
                                            <p>10/01/2023</p>
                                        </div>
                                        <div className="meta__right">
                                            <a href="/blog">Nature</a>
                                            <a href="/blog">Health</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="content ">
                                    <h4 className="h4">
                                        <a href="/blog-single">
                                            There are also natural sources of methane - from
                                        </a>
                                    </h4>
                                    <p>
                                        Daily Star News published on Feb 2nd, 2022, Sangbad
                                        Protidin dated January 31st, 2022 and HRCBM's
                                        investigation. Bangladesh again witnessing uptick in
                                        violence against minorities in the country.
                                    </p>
                                    <div className="cta">
                                        <a href="/blog-single">
                                            {/*<i className="fa-sharp fa-regular fa-arrow-right"></i>*/}
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-wrapper">
                                <ul className="pagination">
                                    <li>
                                        <a href="blog">01</a>
                                    </li>
                                    <li>
                                        <a href="blog" className="active">02</a>
                                    </li>
                                    <li>
                                        <a href="blog">03</a>
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
                    <div className="col-12 col-xl-4">
                        <div className="blog-main__sidebar">
                            <div className="widget ">
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
                            <div className="widget ">
                                <div className="widget__head">
                                    <h5 className="h5">Categories</h5>
                                </div>
                                <div className="widget__list">
                                    <ul>
                                        <li>
                                            <a href="blog.html">Business</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Job Market</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Marketing</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">News</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Social Media</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Trends</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Writing</a>
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
                </div>
            </div>
        </section>
    )
}