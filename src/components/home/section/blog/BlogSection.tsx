import React from 'react'
import './blog-styles.scss'
import BlogOneImg from 'assets/images/home/blog/one.png'
import BlogTwoImg from 'assets/images/home/blog/two.png'
import BlogItem from './blog-item/BlogItem'
import { LinkButton } from 'shared/ui/buttons/ButtonUi'
import { AnimatedText } from 'utils/hooks/useAnimatedText'

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
                                className="sub-title mb-0"
                                icon={<i className="fa-solid fa-arrow-right"></i>}
                                href="#"
                            />
                            <h2 className="title title-anim">
                                <AnimatedText>What's</AnimatedText>
                                <AnimatedText>New</AnimatedText>
                                <AnimatedText>In</AnimatedText>
                                <AnimatedText>Blog</AnimatedText>
                            </h2>
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
