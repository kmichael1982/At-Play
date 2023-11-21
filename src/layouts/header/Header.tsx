import React from 'react'

function Header() {
    return (
        <header className="header">
            <div className="primary-navbar cmn-nav">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar p-0">
                                <div className="navbar__logo">
                                    <a href="index.html" aria-label="go to home">
                                        <img src="assets/images/logo.png" alt="Image" />
                                    </a>
                                </div>
                                <div className="navbar__menu">
                                    <ul>
                                        <li className="navbar__item navbar__item--has-children nav-fade">
                                            <a href="javascript:void(0)" aria-label="dropdown menu"
                                               className="navbar__dropdown-label">Home</a>
                                            <ul className="navbar__sub-menu navbar__sub-menu--lg">
                                                <li>
                                                    <a href="index.html">Creative Agency</a>
                                                </li>
                                                <li>
                                                    <a href="index-light.html">Creative Agency Light</a>
                                                </li>
                                                <li>
                                                    <a href="index-two.html">Digital Agency</a>
                                                </li>
                                                <li>
                                                    <a href="index-two-light.html">Digital Agency Light</a>
                                                </li>
                                                <li>
                                                    <a href="index-three.html">It Solution</a>
                                                </li>
                                                <li>
                                                    <a href="index-three-light.html">It Solution Light</a>
                                                </li>
                                                <li>
                                                    <a href="index-four.html">Personal Portfolio</a>
                                                </li>
                                                <li>
                                                    <a href="index-four-light.html">Personal Portfolio Light</a>
                                                </li>
                                                <li>
                                                    <a href="index-five.html">Interactive Portfolio</a>
                                                </li>
                                                <li>
                                                    <a href="index-five-light.html">Interactive Portfolio Light</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="navbar__item nav-fade">
                                            <a href="about-us.html">About Us</a>
                                        </li>
                                        <li className="navbar__item navbar__item--has-children nav-fade">
                                            <a href="javascript:void(0)" aria-label="dropdown menu"
                                               className="navbar__dropdown-label">Services</a>
                                            <ul className="navbar__sub-menu">
                                                <li>
                                                    <a href="our-services.html">Our Services</a>
                                                </li>
                                                <li>
                                                    <a href="service-single.html">Service Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="navbar__item navbar__item--has-children nav-fade">
                                            <a href="javascript:void(0)" aria-label="dropdown menu"
                                               className="navbar__dropdown-label">Projects</a>
                                            <ul className="navbar__sub-menu">
                                                <li>
                                                    <a href="our-projects.html">Our Projects</a>
                                                </li>
                                                <li>
                                                    <a href="project-single.html">Project Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="navbar__item navbar__item--has-children nav-fade">
                                            <a href="javascript:void(0)" aria-label="dropdown menu"
                                               className="navbar__dropdown-label">Pages</a>
                                            <ul className="navbar__sub-menu">
                                                <li>
                                                    <a href="faq.html">FAQ</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">Error</a>
                                                </li>
                                                <li>
                                                    <a href="our-story.html">Our Story</a>
                                                </li>
                                                <li>
                                                    <a href="portfolio.html">Portfolio</a>
                                                </li>
                                                <li className="navbar__item navbar__item--has-children">
                                                    <a href="javascript:void(0)" aria-label="dropdown menu"
                                                       className="navbar__dropdown-label navbar__dropdown-label-sub">Team</a>
                                                    <ul className="navbar__sub-menu navbar__sub-menu__nested">
                                                        <li>
                                                            <a href="our-teams.html">Our Teams</a>
                                                        </li>
                                                        <li>
                                                            <a href="team-single.html">Team Details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="client-feedback.html">Testimonials</a>
                                                </li>
                                                <li>
                                                    <a href="contact-us.html">Contact Us</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="navbar__item navbar__item--has-children nav-fade">
                                            <a href="javascript:void(0)" aria-label="dropdown menu"
                                               className="navbar__dropdown-label">Blog</a>
                                            <ul className="navbar__sub-menu">
                                                <li>
                                                    <a href="blog.html">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="blog-single.html">Blog Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navbar__options">
                                    <div className="navbar__mobile-options d-none d-sm-flex">
                                        <a href="contact-us.html" className="btn btn--secondary">Let's Talk</a>
                                    </div>
                                    <button className="open-mobile-menu d-flex d-xl-none"
                                            aria-label="toggle mobile menu">
                                        <i className="fa-light fa-bars-staggered"></i>
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu">
                    <nav className="mobile-menu__wrapper nav-fade-active">
                        <div className="mobile-menu__header nav-fade">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="assets/images/logo.png" alt="" title="" />
                                </a>
                            </div>
                            <a href="javascript:void(0)" aria-label="close mobile menu" className="close-mobile-menu">
                                <i className="fa-light fa-xmark-large"></i>
                            </a>
                        </div>
                        <div className="mobile-menu__list">
                            <ul>
                                <li className="navbar__item navbar__item--has-children nav-fade">
                                    <a href="javascript:void(0)" aria-label="dropdown menu"
                                       className="navbar__dropdown-label">Home</a>
                                    <ul className="navbar__sub-menu navbar__sub-menu--lg">
                                        <li>
                                            <a href="index.html">Creative Agency</a>
                                        </li>
                                        <li>
                                            <a href="index-light.html">Creative Agency Light</a>
                                        </li>
                                        <li>
                                            <a href="index-two.html">Digital Agency</a>
                                        </li>
                                        <li>
                                            <a href="index-two-light.html">Digital Agency Light</a>
                                        </li>
                                        <li>
                                            <a href="index-three.html">It Solution</a>
                                        </li>
                                        <li>
                                            <a href="index-three-light.html">It Solution Light</a>
                                        </li>
                                        <li>
                                            <a href="index-four.html">Personal Portfolio</a>
                                        </li>
                                        <li>
                                            <a href="index-four-light.html">Personal Portfolio Light</a>
                                        </li>
                                        <li>
                                            <a href="index-five.html">Interactive Portfolio</a>
                                        </li>
                                        <li>
                                            <a href="index-five-light.html">Interactive Portfolio Light</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="navbar__item nav-fade">
                                    <a href="about-us.html">About Us</a>
                                </li>
                                <li className="navbar__item navbar__item--has-children nav-fade">
                                    <a href="javascript:void(0)" aria-label="dropdown menu"
                                       className="navbar__dropdown-label">Services</a>
                                    <ul className="navbar__sub-menu">
                                        <li>
                                            <a href="our-services.html">Our Services</a>
                                        </li>
                                        <li>
                                            <a href="service-single.html">Service Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="navbar__item navbar__item--has-children nav-fade">
                                    <a href="javascript:void(0)" aria-label="dropdown menu"
                                       className="navbar__dropdown-label">Projects</a>
                                    <ul className="navbar__sub-menu">
                                        <li>
                                            <a href="our-projects.html">Our Projects</a>
                                        </li>
                                        <li>
                                            <a href="project-single.html">Project Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="navbar__item navbar__item--has-children nav-fade">
                                    <a href="javascript:void(0)" aria-label="dropdown menu"
                                       className="navbar__dropdown-label">Pages</a>
                                    <ul className="navbar__sub-menu">
                                        <li>
                                            <a href="faq.html">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="404.html">Error</a>
                                        </li>
                                        <li>
                                            <a href="our-story.html">Our Story</a>
                                        </li>
                                        <li>
                                            <a href="portfolio.html">Portfolio</a>
                                        </li>
                                        <li className="navbar__item navbar__item--has-children">
                                            <a href="javascript:void(0)" aria-label="dropdown menu"
                                               className="navbar__dropdown-label navbar__dropdown-label-sub">Team</a>
                                            <ul className="navbar__sub-menu navbar__sub-menu__nested">
                                                <li>
                                                    <a href="our-teams.html">Our Teams</a>
                                                </li>
                                                <li>
                                                    <a href="team-single.html">Team Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="client-feedback.html">Testimonials</a>
                                        </li>
                                        <li>
                                            <a href="contact-us.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="navbar__item navbar__item--has-children nav-fade">
                                    <a href="javascript:void(0)" aria-label="dropdown menu"
                                       className="navbar__dropdown-label">Blog</a>
                                    <ul className="navbar__sub-menu">
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="blog-single.html">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="mobile-menu__options d-flex d-sm-none justify-content-center nav-fade">
                            <a href="contact-us.html" className="btn btn--secondary">Let's Talk</a>
                        </div>
                        <div className="mobile-menu__social social nav-fade">
                            <a href="https://www.facebook.com/" target="_blank" aria-label="share us on facebook">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://www.twitter.com/" target="_blank" aria-label="share us on twitter">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="https://www.pinterest.com/" target="_blank" aria-label="share us on pinterest">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" aria-label="share us on instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="mobile-menu__backdrop"></div>
            </div>
        </header>
    )
}

export default Header
