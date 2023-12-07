import React, { useState, useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { VideoFrame } from 'shared/ui/design/video-frame/VideFrame'
import VideoPopUp from 'shared/ui/popup/video-popop/VideoPopUp'
import BgModalImage from 'assets/images/about/modal-bg.png'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

interface VideoModalProps {
    imageSrc: string
}

export const VideoModal: React.FC<VideoModalProps> = ({ imageSrc }) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const modalRef = useRef<HTMLImageElement | null>(null)
    const [ ref, inView ] = useInView({ triggerOnce: true })

    useEffect(() => {
        if (inView) {
            const onUpdate = (self: ScrollTrigger) => {
                const progress = self.progress
                const opacity = 1-progress

                gsap.to(modalRef.current, {
                    opacity,
                    transform: `translate(0px, ${progress * 10}%)`,
                })
            }

            ScrollTrigger.create({
                trigger: modalRef.current,
                onUpdate,
            })
        }
    }, [inView])

    const openYouTubeVideo = () => {
        setIsModalOpen(true)
    }

    const closeYouTubeVideo = () => {
        setIsModalOpen(false)
    }

    return (
        <div ref={ref} className="video-modal">
            <img
                ref={modalRef}
                src={BgModalImage}
                alt="Image"
                className="modal-bg"
            />
            <VideoFrame onClick={openYouTubeVideo} imageSrc={imageSrc} />
            <VideoPopUp
                isOpen={isModalOpen}
                onClose={closeYouTubeVideo}
                videoUrl="https://www.youtube.com/watch?v=RvreULjnzFo"
            />
        </div>
    )
}