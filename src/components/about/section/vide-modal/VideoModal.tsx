import React, { useState, useRef, useEffect } from 'react'

import { VideoFrame } from 'shared/ui/design/video-frame/VideFrame'
import VideoPopUp from 'shared/ui/popup/video-popop/VideoPopUp'
import BgModalImage from 'assets/images/about/modal-bg.png'

import gsap from 'gsap'
import { Power3 } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

interface VideoModalProps {
    imageSrc: string
}

export const VideoModal: React.FC<VideoModalProps> = ({ imageSrc }) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const modalRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (modalRef.current)  {
            gsap.from(modalRef.current, {
                opacity: 0,
                y: '0%',
                duration: 1,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: modalRef.current,
                    start: 'top center+=20',
                    end: 'bottom center',
                    scrub: true
                },
            })
        }
    }, [])

    const openYouTubeVideo = () => {
        setIsModalOpen(true)
    }

    const closeYouTubeVideo = () => {
        setIsModalOpen(false)
    }

    return (
        <div ref={modalRef} className="video-modal">
            <img
                src={BgModalImage}
                alt="Image"
                className="modal-bg"
                style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    transform: 'translate(0px,0 %)', opacity: 1
                }}
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