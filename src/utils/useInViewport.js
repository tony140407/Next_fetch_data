import { useState, useEffect } from 'react'

export default function useInViewport(ref) {
    const [isInViewport, setIsInViewport] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const element = ref.current
            if (!element) {
                return
            }

            const rect = element.getBoundingClientRect()
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight
            const threshold = 0.9

            const elementTop = rect.top
            const elementBottom = rect.bottom
            const elementHeight = rect.height

            // 當 90% 的元素在 viewport 裡面時觸發
            if (elementTop + elementHeight * threshold > 0) {
                setIsInViewport(true)
            } else {
                setIsInViewport(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [ref])

    return isInViewport
}
