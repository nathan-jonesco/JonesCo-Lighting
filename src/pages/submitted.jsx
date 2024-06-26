import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import  CTAA  from '@/components/CTA-B'
import Submission from '@/components/submission'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Lighting Installers || Submitted</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
        <Submission />
      </main>
      <Footer />
    </>
  )
}
