import { RefObject } from 'react'

import gsap from 'gsap'

export const animateItem3D = (itemRef: RefObject<HTMLDivElement | null>) => {
    const item = itemRef.current

    if (item) {
        const handleMouseMove = (event: MouseEvent) => {
            const rect = item.getBoundingClientRect()
            const offsetX = event.clientX - rect.left
            const offsetY = event.clientY - rect.top

            const rotateX = -(offsetY - rect.height / 10) / 100
            const rotateY = (offsetX - rect.width / 10) / 100

            gsap.to(item, {
                duration: 0.05,
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
                ease: 'power2.out',
            })
        }

        const handleMouseLeave = () => {
            gsap.to(item, {
                duration: 0.05,
                transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                ease: 'power2.out',
            })
        }

        item.addEventListener('mousemove', handleMouseMove)
        item.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            item.removeEventListener('mousemove', handleMouseMove)
            item.removeEventListener('mouseleave', handleMouseLeave)
        }
    }
}