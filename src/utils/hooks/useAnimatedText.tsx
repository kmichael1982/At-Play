import React, { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'

export const AnimatedText: React.FC<{
    children: ReactNode
}> = ({ children }) => {
    const textRef = useRef(null)

    useEffect(() => {
        gsap.from(textRef.current, {
            opacity: 0,
            x: 100,
            duration: 4,
        })
    }, [])

    return <div style={{position: 'relative', display:'inline-block'}} className="mx-4" ref={textRef}> {children} </div>
}

// import React, { ReactNode, useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
//
// gsap.registerPlugin(ScrollTrigger)
//
// export const AnimatedText: React.FC<{
//     children: ReactNode;
// }> = ({ children }) => {
//     const textRef = useRef(null)
//
//     useEffect(() => {
//         const animation = gsap.from(textRef.current, {
//             opacity: 0,
//             x: 100,
//             duration: 10,
//             scrollTrigger: {
//                 trigger: textRef.current,
//                 start: 'top 80%',
//                 end: '+=500',
//                 scrub: true,
//             },
//         })
//
//         return () => {
//             animation.kill()
//         }
//     }, [textRef])
//
//     return <div style={{ position: 'relative', display: 'inline-block' }} className="mx-4" ref={textRef}>{children}</div>
// }
