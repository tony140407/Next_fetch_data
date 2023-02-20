import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from '@/styles/Intro.module.css'

function Intro() {
    const imageSizes = {
        desktop: [
            { width: 413, height: 290 },
            { width: 355, height: 285 },
            { width: 200, height: 210 },
            { width: 172, height: 132 },
            { width: 231, height: 184 },
            { width: 332, height: 259 },
        ],
        mobile: [
            { width: 207, height: 175 },
            { width: 215, height: 162 },
            { width: 126, height: 132 },
            { width: 81, height: 66 },
            { width: 128, height: 99 },
            { width: 152, height: 112 },
        ],
    }
    const defaultSize = {
        desktop: {
            width: 1440,
            height: 1080,
        },
        mobile: {
            width: 375,
            height: 849,
        },
    }

    const [scale, setScale] = useState(1)
    const [currentMode, setCurrentMode] = useState('desktop')

    useEffect(() => {
        const handleResize = () => {
            const { innerWidth } = window
            let newScale = innerWidth / defaultSize[currentMode].width
            let newMode = currentMode
            if (innerWidth <= 767 && currentMode !== 'mobile') {
                newMode = 'mobile'
                newScale = innerWidth / defaultSize.mobile.width
            } else if (innerWidth > 767 && currentMode !== 'desktop') {
                newMode = 'desktop'
                newScale = innerWidth / defaultSize.desktop.width
            }

            setCurrentMode(newMode)
            setScale(newScale)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <>
            <div
                className={styles.Intro}
                style={{ height: defaultSize[currentMode].height * scale }}
            >
                <section
                    className={styles.Intro__content}
                    style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) scale(${scale})`,
                    }}
                >
                    <div>
                        <h1 className={styles.Intro__content__text}>
                            Creating perfect
                            <br />
                            lines and imposing
                            <br />
                            presence
                        </h1>
                        {imageSizes[currentMode].map((size, index) => (
                            <Image
                                key={`desktop_${index}}`}
                                src={`/section2-image${index + 1}.jpg`}
                                alt={size.width}
                                className={styles[`Intro__image${index + 1}`]}
                                width={size.width}
                                height={size.height}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Intro
