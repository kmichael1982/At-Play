import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

import LinesContent from 'shared/ui/design/lines-content/LinesContent'
import VideoPopUp from 'shared/ui/popup/video-popop/VideoPopUp'
import { LinkButton } from 'shared/ui/buttons/ButtonUi'
import TextAnimation from 'utils/hooks/useAnimatetText'
import { VideoFrame } from 'shared/ui/design/video-frame/VideFrame'
import { getHomePageFullInfo } from 'shared/helpers/generic-api'

import BannerVideo from 'assets/images/home/banner/Atplay home page video-2.mp4'
import VideoFrameIcon from 'assets/images/popup-video.png'
import StarIcon from 'assets/images/star.png'

import './banner-styles.scss'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function BannerSection() {
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ homeData, setHomeData ] = useState<any>([])
    const parts = homeData?.Title ? homeData.Title.split(/\{(.*?)\}/).filter(Boolean) : []

    const bannerImageRef = useRef(null)
    const [ ref, inView ] = useInView({ triggerOnce: true })
    const scrollFactor = 0.01

    const openYouTubeVideo = () => {
        setIsModalOpen(true)
    }

    const closeYouTubeVideo = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        const tl = gsap.timeline()
        const translateY = -50
        const translate3dY = -5.981 + scrollFactor * 0.1
        const scale = 1.0365 + scrollFactor * 0.002
        const zIndex = -1
        const opacity = 0.9635 - scrollFactor * 0.001

        tl.to(bannerImageRef.current, {
            duration: 0.003,
            xPercent: -50,
            yPercent: translateY,
            ease: 'power2.inOut',
        }).to(
            bannerImageRef.current,
            {
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
    }, [scrollFactor])

    useEffect(() => {
        async function getHomePageFullData() {
            try {
                const res = await getHomePageFullInfo()
                if (res) setHomeData(res.data.attributes)
            } catch (error) {
                console.error('Failed to fetch home page data:', error)
            }
        }
        getHomePageFullData()
    }, [homeData])

    const parseTitle = (title: string) => title

    return (
        <section ref={ref} className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="banner__content">
                            <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                                {parts.map((part: string, index: number) => (
                                    <React.Fragment key={index}>
                                        {index === 0 && <TextAnimation text={parseTitle(part)} />}
                                        {index === 1 && (
                                            <span className="text-stroke">
                                                <TextAnimation text={parseTitle(part)} />
                                            </span>
                                        )}
                                        {index === 4 && (
                                            <span className="interval">
                                                <i className="fa-solid fa-arrow-right" style={{ transform: 'rotate(320deg)' }}></i>
                                                <TextAnimation text={parseTitle(part)} />
                                            </span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </h1>
                            <div className="banner__content-inner">
                                <p>{homeData?.Description}</p>
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

            <div className="banner-one-thumb d-none d-sm-block g-ban-one">
                <video
                    ref={bannerImageRef}
                    autoPlay
                    loop={false}
                    muted
                    controls={false}
                    className="w-full h-full"
                >
                    <source src={BannerVideo} type="video/mp4" />
                </video>
            </div>

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