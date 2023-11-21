import './blog-styles.scss'
import BlogOneImg from 'assets/images/home/blog/one.png'
import BlogTwoImg from 'assets/images/home/blog/two.png'

function BlogSection() {
    return (
        <section className="section blog fade-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="section__header text-center">
                              <span className="sub-title">
                                 news &amp; Blog
                                 <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            <h2 className="title title-anim">What's New In Blog</h2>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between w-full gaper">
                    <div className="px-2">
                        <div className="blog__single fade-top">
                            <div className="blog__single-thumb topy-tilt">
                                <a href="blog-single.html">
                                    <img src={BlogOneImg} alt="Image" />
                                </a>
                            </div>
                            <div className="blog__single-content">
                                <h4>
                                    <a href="blog-single.html">A Simple Social Media Marketing Checklist</a>
                                </h4>
                                <div className="blog__single-meta">
                                    <a href="blog.html" className="sub-title">
                                        creative
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                    <p>MARCH 23, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-2">
                        <div className="blog__single fade-top">
                            <div className="blog__single-thumb topy-tilt">
                                <a href="#blog-single">
                                    <img src={BlogTwoImg} alt="Image" />
                                </a>
                            </div>
                            <div className="blog__single-content">
                                <h4>
                                    <a href="blog-single.html">Transforming Challenges into Opportunities</a>
                                </h4>
                                <div className="blog__single-meta">
                                    <a href="blog.html" className="sub-title">
                                        creative
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                    <p>MARCH 23, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection
