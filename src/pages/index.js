import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Banner from './components/Banner'
import Intro from './components/Intro'

function HomePage() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div style={{ overflow: 'hidden' }}>
                <Banner />
                <Intro />
            </div>
        </>
    )
}

export default HomePage
