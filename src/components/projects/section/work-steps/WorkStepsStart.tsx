import React, { useState } from 'react'

import VideoPopUp from 'shared/ui/popup/video-popop/VideoPopUp'
import { VideoFrame } from 'shared/ui/design/video-frame/VideFrame'
import { HeaderSecondary } from 'shared/ui/design/header-secondary/HeaderSecondary'
import { WorkStepsElem } from './work-steps-elem/WorkStepsElem'

import ThumbImg from 'assets/images/pojects/thumb-one.png'
import VideoFrameIcon from 'assets/images/popup-video.png'

export const WorkStepsStart = () => {
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const openYouTubeVideo = () => {
        setIsModalOpen(true)
    }

    const closeYouTubeVideo = () => {
        setIsModalOpen(false)
    }

    return (
        <section className="section work-steps work-alt fade-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <HeaderSecondary
                            label="WORKING STEPS"
                            title="Our Work Process"
                            elem={
                                <p>
                                    Bring to the table win-win survival strategies to ensure proactive domination.
                                    At the end of the day, going forward, a new normal that has evolved from
                                    generation on the runway heading towards
                                </p>
                            }
                        />
                    </div>
                </div>

                <div className="row">
                    <WorkStepsElem percentage={25} title="Discover & Strategy." thumbImg={ThumbImg} />
                    <WorkStepsElem percentage={50} title="Wireframes & User-flows" thumbImg={ThumbImg} customClassName="work-two" />
                    <WorkStepsElem percentage={75} title="Hi-Fidelity design" thumbImg={ThumbImg} customClassName="work-three"/>
                    <WorkStepsElem percentage={100} title="Development Phase" thumbImg={ThumbImg} customClassName="work-four"/>
                </div>
            </div>

            <VideoFrame onClick={openYouTubeVideo} imageSrc={VideoFrameIcon} className="d-none d-md-flex" />
            <VideoPopUp
                isOpen={isModalOpen}
                onClose={closeYouTubeVideo}
                videoUrl="https://www.youtube.com/watch?v=RvreULjnzFo"
            />
        </section>
    )
}