import { useState, useEffect } from 'react'

export default function useInViewport(ref) {
    const [canPlay, setCanPlay] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) {
            return
        }
        const handleCanPlayThrough = () => {
            setCanPlay(true)
        }

        element.addEventListener('canplaythrough', handleCanPlayThrough)

        return () => {
            element.removeEventListener('canplaythrough', handleCanPlayThrough)
        }
    }, [ref])

    return canPlay
}
