import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import './banner-styles.scss'
import BannerImage from 'assets/images/home/banner/banner-one-thumb.png'
import StarIcon from 'assets/images/star.png'
import VideoFrameIcon from 'assets/images/popup-video.png'
import LinesContent from 'shared/ui/design/lines-content/LinesContent'
import { LinkButton } from 'shared/ui/buttons/ButtonUi'
import ScrollAnimatedImage from './ScrollAnimatedImage'
import VideoPopUp from 'shared/ui/popup/video-popop/VideoPopUp'
import TextAnimation from 'utils/hooks/useAnimatetText'
import { VideoFrame } from 'shared/ui/design/video-frame/VideFrame'

function BannerSection() {
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ scrollPosition, setScrollPosition ] = useState(0)
    const bannerImageRef = useRef(null)

    const openYouTubeVideo = () => {
        setIsModalOpen(true)
    }

    const closeYouTubeVideo = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const tl = gsap.timeline()
        const translateY = -50
        const translate3dY = -5.981 + scrollPosition * 0.1
        const scale = 1.0365 + scrollPosition * 0.002
        const zIndex = -1
        const opacity = 0.9635 - scrollPosition * 0.001

        tl.to(bannerImageRef.current, {
            duration: 0.003,
            xPercent: -50,
            yPercent: translateY,
            ease: 'power2.inOut',
        }).to(bannerImageRef.current, {
            duration: 0.002,
            xPercent: -50,
            yPercent: translate3dY,
            scale: scale,
            zIndex: zIndex,
            opacity: opacity,
            ease: 'power2.inOut',
        },
            '>'
        )

        return () => {
            tl.kill()
        }
    }, [scrollPosition])

    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="banner__content">
                            <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                                <TextAnimation text="we are" />
                                <span className="text-stroke">
                                    <TextAnimation text="creative" />
                                </span>
                                <span className="interval">
                                    <i className="fa-solid fa-arrow-right" style={{ transform: 'rotate(320deg)' }}></i>
                                    <TextAnimation text="marketing agency" />
                                </span>
                            </h1>
                            <div className="banner__content-inner">
                                <p>We are a full-service website design, development and digital marketing company
                                    specializing in SEO, content marketing that grows brands.</p>
                                <div className="cta section__content-cta">
                                    <div className="single">
                                        <h5 className="fw-7">
                                            12+
                                        </h5>
                                        <p className="fw-5">years of experience</p>
                                    </div>
                                    <div className="single">
                                        <h5 className="fw-7">
                                            25k
                                        </h5>
                                        <p className="fw-5">completed projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                ref={bannerImageRef}
                // style={styles}
                src={BannerImage}
                alt="Image"
                className="banner-one-thumb d-none d-sm-block g-ban-one"
            />

            <ScrollAnimatedImage
                imageSrc="your-image-source.jpg"
                altText="Your Alt Text"
                className="banner-one-thumb.visible"
            />

            <img src={StarIcon} alt="Image" className="star" />
            <div className="banner-left-text banner-social-text d-none d-md-flex">
                <LinkButton label="mail : info@xpovio.com" href="mailto:info@xpovio.com" />
                <LinkButton label="Call : +99 2158 003 6980" href="tel:99-2158-003-6980" />
            </div>

            <div className="banner-right-text banner-social-text d-none d-md-flex">
                <LinkButton label="instagram" href="https://www.instagram.com/" />
                <LinkButton label="Linkedin" href="https://www.pinterest.com/" />
                <LinkButton label="facebook" href="https://www.facebook.com/" />
            </div>

            <VideoFrame onClick={openYouTubeVideo} imageSrc={VideoFrameIcon} />
            <VideoPopUp
                isOpen={isModalOpen}
                onClose={closeYouTubeVideo}
                videoUrl="//www.youtube.com/embed/RvreULjnzFo?autoplay=1"
            />

            <LinesContent />
        </section>
    )
}

export default BannerSection
