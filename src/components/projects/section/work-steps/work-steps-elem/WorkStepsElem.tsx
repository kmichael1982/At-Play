import React, { useEffect, useRef, useState } from 'react'
import { animateItem } from 'shared/ui/design/animation/animateItem'

interface WorkStepsElemProps {
    percentage: number
    title: string
    thumbImg: string
    customClassName?: string
    isActive?: boolean
}

export const WorkStepsElem: React.FC<WorkStepsElemProps> = ({ percentage, title, thumbImg, customClassName, isActive = false }) => {
    const itemRef = useRef<HTMLDivElement | null>(null)
    const [ isHovered, setIsHovered ] = useState(false)

    const isSecondElement = customClassName === 'work-two'
    const stepClassName = `work-steps__single ${(isActive && (isHovered && isSecondElement)) ? ' work-steps__single-active' : ''} fade-top ${customClassName || ''}`;

    useEffect(() => {
        animateItem(itemRef)
    }, [])

    return (
        <div
            ref={itemRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
                    data-background="assets/images/work/thumb-one.png"
                    style={{ backgroundImage: `url("${thumbImg}")` }}
                ></div>
            </div>
        </div>
    )
}