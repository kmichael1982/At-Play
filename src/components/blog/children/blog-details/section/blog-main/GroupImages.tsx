import React, { useEffect, useRef } from 'react'

import { animateItem } from 'utils/hooks/animateItem'

export const GroupImages: React.FC<{
    groupOneSrc: string
    groupTwoSrc: string
}> = ({ groupOneSrc, groupTwoSrc }) => {
    const itemRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        animateItem(itemRef)
    }, [])

    return (
        <div className="bd-group" ref={itemRef}>
            <img src={groupOneSrc} alt="Image" className="fade-top" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1 }} />
            <img src={groupTwoSrc} alt="Image" className="fade-top" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1 }} />
        </div>
    )
}