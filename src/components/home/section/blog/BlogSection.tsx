import './blog-styles.scss'
import BlogOneImg from 'assets/images/home/blog/one.png'
import BlogTwoImg from 'assets/images/home/blog/two.png'
import BlogItem from './blog-item/BlogItem'

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
                        <BlogItem
                            title="A Simple Social Media Marketing Checklist"
                            link="/blog"
                            image={BlogOneImg}
                            category={{ name: 'creative', link: '/blog' }}
                            date="MARCH 23, 2023"
                        />
                    </div>

                    <div className="px-2">
                        <BlogItem
                            title="Transforming Challenges into Opportunities"
                            link="/blog"
                            image={BlogTwoImg}
                            category={{ name: 'creative', link: '/blog' }}
                            date="MARCH 23, 2023"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection
