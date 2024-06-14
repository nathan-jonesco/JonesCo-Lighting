import Head from 'next/head'
import CTAA from '@/components/CTA-A'
import CTAB from '@/components/CTA-B'
import CTAC from '@/components/CTA-C'
import CTAD from '@/components/CTA-D'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import OurServices from '@/components/OurServices'
import ServiceLocations from '@/components/ServiceLocationsCity'
import WhyJonesCo from '@/components/Value'
import John from '@/components/Why'
import ComingSoon from '@/components/ComingSoon'


import Banner from '@/components/banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Lighting Installers 🎄</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Lighting."
        />

      </Head>
      <Banner />



      <main className="-z-50">
      

        <ComingSoon />



      </main>

    </>
  )
}
