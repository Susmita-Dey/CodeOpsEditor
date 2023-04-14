import ContactForm from '@/components/ContactForm'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    return (
        <>
            <div>
                <Head>
                    <title>CodeOpsEditor | Contact Us</title>
                </Head>
                <ContactForm />
            </div>
        </>
    )
}
