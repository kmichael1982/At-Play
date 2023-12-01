import React from 'react'

import { LinkButton } from 'shared/ui/buttons/ButtonUi'
import TextAnimation from 'utils/hooks/useAnimatetText'
import BlogItem from './blog-item/BlogItem'

import BlogOneImg from 'assets/images/home/blog/one.png'
import BlogTwoImg from 'assets/images/home/blog/two.png'
import './blog-styles.scss'

function BlogSection() {
    return (
        <section className="section blog fade-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="section__header text-center">
                            <LinkButton
                                isLink={true}
                                label="news &amp; Blog"
                                className="sub-title"
                                icon={<i className="fa-solid fa-arrow-right"></i>}
                                href="#"
                            />
                            <h2 className="title title-anim">
                                <TextAnimation text="What's" />
                                <TextAnimation text="new" />
                                <TextAnimation text="In" />
                                <TextAnimation text="Blog" />
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row gaper">
                    <div className="col-12 col-md-6">
                        <BlogItem
                            title="A Simple Social Media Marketing Checklist"
                            link="/blog"
                            image={BlogOneImg}
                            category={{ name: 'creative', link: '/blog' }}
                            date="MARCH 23, 2023"
                        />
                    </div>

                    <div className="col-12 col-md-6">
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