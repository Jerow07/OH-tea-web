import dynamic from 'next/dynamic'
import Head from 'next/head'
import styled from 'styled-components'

import { Header } from '../components/Header'
import { Slogan } from '../components/Slogan'
import { Cta } from '../components/Cta'
import { Concepto } from '../sections/Concepto'
import { Galeria } from '../sections/Galeria'
import { Contacto } from '../sections/Contacto'
import { Footer } from '../components/Footer'

const LandingSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 660px;
  overflow: hidden;
  @media(min-width: 768px) {
    min-height: 760px;
  }
`

export const Home = () => {
  const NoSSRMap = dynamic(() => import('../sections/LocationMap'), { ssr: false })

  return (
    <>
      <Head>
        <title>Oh! Tea</title>
        <link rel="icon" href="https://ohtea.com.ar/wp-content/uploads/2021/02/cropped-logo-oh-tea-1-1-32x32.png" />
      </Head>
      <LandingSection>
        <div className="absolute text-white w-full h-screen" style={{ minHeight: '760px' }}>
          <Header />
          <Slogan />
          <Cta />
          <div className="absolute top-0 left-0 w-full min-h-full h-screen" style={{ zIndex: -1 }}>
            <video src="videoplayback.mp4" autoPlay muted loop className="w-auto min-w-full min-h-full max-w-none"></video>
            <div className="absolute top-0 bg-black opacity-50 w-full h-full"></div>
          </div>
        </div>
      </LandingSection>
      <Concepto />
      <Galeria />
      <Contacto />
      <NoSSRMap />
      <Footer />
    </>
  )
}

export default Home;