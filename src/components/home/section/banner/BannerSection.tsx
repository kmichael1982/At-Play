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

interface homeDataType {
    Title: string
    Description: string
}

function BannerSection() {
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ homeData, setHomeData ] = useState<homeDataType | null>(null)
    const parts = homeData?.Title ? homeData.Title.split(/\{(.*?)\}/).filter(Boolean) : []

    const bannerImageRef = useRef<HTMLImageElement | null>(null)
    const [ ref, inView ] = useInView({ triggerOnce: true })

    const openYouTubeVideo = () => {
        setIsModalOpen(true)
    }

    const closeYouTubeVideo = () => {
        setIsModalOpen(false)
    }

    const calculateOpacity = (scrollPercent: number) => {
        const minOpacity = 0.8635
        const maxOpacity = 0.65

        return minOpacity + scrollPercent * (maxOpacity - minOpacity)
    }

    const calculateScale = (scrollPercent: number) => {
        const minScale = 0.15
        const maxScale = 3.5

        return minScale + scrollPercent * (maxScale - minScale)
    }

    useEffect(() => {
            const onUpdate = (self: ScrollTrigger) => {
                const scrollPercent = self.progress
                const opacity = calculateOpacity(scrollPercent)
                const scale = calculateScale(scrollPercent)
                const translateY = `${-5.15 + 65.2686 * scrollPercent}%`

                gsap.to(bannerImageRef.current, {
                    opacity,
                    scale,
                    y: translateY
                })
            }

            ScrollTrigger.create({
                trigger: bannerImageRef.current,
                onUpdate,
            })
    }, [bannerImageRef])

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
    }, [])

    const parseTitle = (title: string) => title

    return (
        <section ref={ref} className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="banner__content">
                            <h1 className="text-uppercase h1 text-start fw-9 mb-0 title-anim">
                                <TextAnimation text="we are a" />
                                <span className="pl-3 text-stroke">
                                    <TextAnimation text="creative" />
                                </span>
                                <span className="interval">
                                    <i className="fa-solid fa-arrow-right" style={{ transform: 'rotate(320deg)' }}></i>
                                    <TextAnimation text="marketing agency" />
                                </span>
                                {/*{parts.map((part: string, index: number) => (*/}
                                {/*    <React.Fragment key={index}>*/}
                                {/*        {index === 0 && <TextAnimation text={parseTitle(part)} />}*/}
                                {/*        {index === 1 && (*/}
                                {/*            <span className="text-stroke">*/}
                                {/*                <TextAnimation text={parseTitle(part)} />*/}
                                {/*            </span>*/}
                                {/*        )}*/}
                                {/*        {index === 4 && (*/}
                                {/*            <span className="interval">*/}
                                {/*                <i className="fa-solid fa-arrow-right" style={{ transform: 'rotate(320deg)' }}></i>*/}
                                {/*                <TextAnimation text={parseTitle(part)} />*/}
                                {/*            </span>*/}
                                {/*        )}*/}
                                {/*    </React.Fragment>*/}
                                {/*))}*/}
                            </h1>
                            <div className="banner__content-inner">
                                {/*<p>{homeData?.Description}</p>*/}
                                <p>
                                    We are a full-service website design, development and digital marketing company specialising in SEO & content marketing that grows brands.
                                </p>
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

            <div ref={bannerImageRef} className="banner-one-thumb d-none d-sm-block bg-ban-one">
                <video
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