import { useState, useEffect, useRef } from 'react'
import useInViewport from '@/utils/useInViewport'

function Banner() {
    const videoRef = useRef(null)
    const [videoSrc, setVideoSrc] = useState('')
    // console.log(useInViewport)
    const isInViewport = useInViewport(videoRef)
    useEffect(() => {
        const cachedVideoSrc = localStorage.getItem('videoSrc')
        const cachedTime = localStorage.getItem('videoSrcTime')
        const maxAge = 60 * 60 * 1000 // 1小時
        const currentTime = new Date().getTime()

        // 若有缓存，且缓存时间小於1小時，則使用缓存
        if (cachedVideoSrc && cachedTime && currentTime - cachedTime < maxAge) {
            setVideoSrc(cachedVideoSrc)
        } else {
            fetch('/api/video')
                .then((response) => response.json())
                .then((data) => {
                    setVideoSrc(data.src)
                    localStorage.setItem('videoSrc', data.src)
                    localStorage.setItem('videoSrcTime', currentTime)
                })
                .catch((error) => console.error(error))
        }
    }, [])

    useEffect(() => {
        if (isInViewport && videoRef.current) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }, [isInViewport])
    return (
        <>
            <video ref={videoRef} src={videoSrc} loop />
        </>
    )
}

export default Banner
