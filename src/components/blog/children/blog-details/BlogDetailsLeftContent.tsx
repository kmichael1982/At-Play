import React, { useEffect, useRef } from 'react'

import { animateItem } from 'utils/hooks/animateItem'
import { BlogDetailsCommentForm } from './section/blog-main/BlogDetailsCommentForm'
import { GroupImages } from './section/blog-main/GroupImages'
import { BlogTags } from './section/blog-main/BlogTags'

import GroupOneImg from 'assets/images/blog/blog-details/group-one.png'
import GroupTwoImg from 'assets/images/blog/blog-details/group-two.png'
import PosterImg from 'assets/images/blog/blog-details/poster.png'
import ElevenImg from 'assets/images/blog/eleven.png'
import TenImg from 'assets/images/blog/ten.png'

export const BlogDetailsLeftContent = () => {
    const itemRef = useRef<HTMLDivElement | null>(null)
    const topImageRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        animateItem(itemRef)
        animateItem(topImageRef)
    }, [])

    return (
        <div className="col-12 col-xl-8">
            <div className="blog-details__content">
                <div
                    className="bd-thumb fade-top"
                    ref={topImageRef}
                    style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0 px, 0px)', opacity: 1 }}
                >
                    <img src={PosterImg} alt="Image" />
                </div>
                <div className="bd-content">
                    <div className="bd-meta">
                        <div className="meta__left">
                            <p>
                                <strong>Written by :</strong>
                                Marry biden
                            </p>
                            <span></span>
                            <p>10/01/2023</p>
                        </div>
                    </div>
                    <div className="bd-content-info">
                        <h4 className="h4">
                            Guide dog shortage: The blind people who train their
                        </h4>
                        <div className="paragraph">
                            <p>
                                Proin ultricies ultricies est vitae cursus. Nulla sit
                                amet suscipit tortor. Maecenas dui erat, ornare eget
                                tristique vitae, rutrum pretium justo. Phasellus vitae
                                consequat nisi, quis luctus nisl. Praesent faucibus sem
                                id massa semper ornare. Nam eu magna at mi pellentesque
                                mattis. Morbi at condimentum velit. Phasellus aliquet,
                                leo auctor volutpat ultrices, metus dolor dictum enim,
                                sed convallis lacus urna nec erat.
                            </p>
                            <p>
                                consectetur adipiscing elit. Etiam at mauris accumsan mi
                                pulvinar lacinia a in justo. Ut tempor et libero quis
                                dignissim. Nulla at convallis libero, vitae aliquam leo.
                                Etiam ut augue nibh. In laoreet neque quis ex ornare,
                                quis auctor elit facilisis. Mauris dapibus massa rhoncus
                                ligula luctus vulputate. Fusce condimentum placerat
                                vulputate. Praesent ullamcorper dui in dui sagittis
                                commodo.
                            </p>
                        </div>
                        <h4 className="h4">Where can I get some?</h4>
                    </div>
                </div>

                <GroupImages
                    groupOneSrc={GroupOneImg}
                    groupTwoSrc={GroupTwoImg}
                />

                <div className="bd-content">
                    <div className="bd-content__alt">
                        <p>
                            Proin ultricies ultricies est vitae cursus. Nulla sit amet
                            suscipit tortor. Maecenas dui erat, ornare eget tristique
                            vitae, rutrum pretium justo. Phasellus vitae consequat
                            nisi, quis luctus nisl. Praesent faucibus sem id massa
                            semper ornare. Nam eu magna at mi pellentesque mattis.
                            Morbi at condimentum velit. Phasellus aliquet, leo auctor
                            volutpat ultrices, metus dolor dictum enim, sed convallis
                            lacus urna nec erat.
                        </p>
                        <ul>
                            <li>Mauris maximus diam ac imperdiet dictum.</li>
                            <li>
                                Maecenas eget ipsum dapibus, rutrum mi non, ultricies
                                massa.
                            </li>
                            <li>Nam non purus porta risus tincidunt cursus.</li>
                            <li>
                                Quisque blandit lacus vel urna pellentesque mattis.
                            </li>
                            <li>Maecenas vehicula tortor et consectetur faucibus.</li>
                        </ul>
                    </div>
                </div>

                <div className="bd-quote">
                    <blockquote>
                        <q className="light-title-lg">
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit
                            amet, consectetur, adipisci velit...
                        </q>
                    </blockquote>
                </div>
                <div className="bd-content">
                    <div className="bd-content__alt mt-0">
                        <p>
                            Proin ultricies ultricies est vitae cursus. Nulla sit amet
                            suscipit tortor. Maecenas dui erat, ornare eget tristique
                            vitae, rutrum pretium justo. Phasellus vitae consequat
                            nisi, quis luctus nisl. Praesent faucibus sem id massa
                            semper ornare. Nam eu magna at mi pellentesque mattis.
                            Morbi at condimentum velit. Phasellus aliquet, leo auctor
                            volutpat ultrices, metus dolor dictum enim, sed convallis
                            lacus urna nec erat.
                        </p>
                    </div>
                </div>
                <BlogTags />
            </div>
            <div className="blog-details__pagination">
                <div className="row gaper">
                    <div className="col-md-6">
                        <div className="single">
                            <a href="/blog">
                                <i className="fa-solid fa-arrow-left-long"></i>
                                Previous Blog
                            </a>
                            <div className="latest-single">
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
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single single--alt">
                            <a href="/blog">
                                Next Blog
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                            <div className="latest-single">
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
                        </div>
                    </div>
                </div>
                <BlogDetailsCommentForm />
            </div>
        </div>
    )
}