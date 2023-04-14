import SignUpComponent from '@/components/SignUpComponent'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    return (
        <>
            <div>
                <Head>
                    <title>CodeOpsEditor | Sign Up</title>
                </Head>
                <SignUpComponent />
            </div>
        </>
    )
}
