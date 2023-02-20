import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from '@/styles/Intro.module.css'

function Intro() {
    const imageSizes_desktop = [
        { width: 413, height: 290 },
        { width: 355, height: 285 },
        { width: 200, height: 210 },
        { width: 172, height: 132 },
        { width: 231, height: 184 },
        { width: 332, height: 259 },
    ]
    const imageSizes_mobile = [
        { width: 207, height: 175 },
        { width: 215, height: 162 },
        { width: 126, height: 132 },
        { width: 81, height: 66 },
        { width: 128, height: 99 },
    ]
    const defaultSize = {
        width: 1440,
        height: 1080,
    }

    const [scale, setScale] = useState(1)

    useEffect(() => {
        const handleResize = () => {
            const { innerWidth } = window
            const newScale = innerWidth / defaultSize.width
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
            <div className={styles.Intro} style={{ height: defaultSize.height * scale }}>
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
                        {imageSizes_desktop.map((size, index) => (
                            <Image
                                key={index}
                                src={`/section2-image${index + 1}.jpg`}
                                alt='Intro image'
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
