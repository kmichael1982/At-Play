import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const SkillBar: React.FC<{
    title: string
    percent: number
}> = ({ title, percent }) => {
    const skillBarRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: skillBarRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            },
        })

        tl.to(skillBarRef.current, {
            width: `${percent}%`,
            duration: 1,
            ease: 'power2.out',
        })
    }, [])

    return (
        <div className="skill-bar-single">
            <div className="skill-bar-title">
                <p className="primary-text">{title}</p>
            </div>
            <div className="skill-bar-wrapper" data-percent={`${percent}%`}>
                <div className="skill-bar">
                    <div className="skill-bar-percent" ref={skillBarRef}>
                        <span className="percent-value">{`${percent}%`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillBar