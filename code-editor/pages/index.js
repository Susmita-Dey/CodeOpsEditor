import FaqComponent from '@/components/FAQComponent'
import HeroSection from '@/components/HeroSection'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>CodeInCloud | Online Free Code Editor for Cloud</title>
        </Head>
        <HeroSection />
        <FaqComponent />
      </div>
    </>
  )
}
