import React, { useEffect, useRef, useState } from 'react'
import { animateItem } from 'shared/ui/animation/animateItem'

interface WorkStepsElemProps {
    percentage: number
    title: string
    thumbImg: string
    customClassName?: string
}

export const WorkStepsElem: React.FC<WorkStepsElemProps> = ({ percentage, title, thumbImg, customClassName }) => {
    const itemRef = useRef<HTMLDivElement | null>(null)
    const [ isActive, setIsActive] = useState(customClassName === 'work-two')
    const isSecondElement = customClassName === 'work-two'
    const stepClassName = `work-steps__single ${( isActive && isSecondElement ) ? ' work-steps__single-active' : ''} fade-top ${customClassName || ''}`

    useEffect(() => {
        animateItem(itemRef)
    }, [])

    return (
        <div
            ref={itemRef}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(isSecondElement ? true : false)}
            className="col-12 col-sm-6 col-xl-3" key={percentage}
        >
            <div className={stepClassName} style={{ transform: 'none', opacity: 1 }}>
                <span>
                    {percentage}
                    <br />
                    %
                </span>
                <h5>{title}</h5>
                <div
                    className="work-thumb-hover d-none d-md-block"
                    style={{ backgroundImage: `url("${thumbImg}")` }}
                ></div>
            </div>
        </div>
    )
}