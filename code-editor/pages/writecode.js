import Landing from '@/components/editor/Landing'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    return (
        <>
            <div>
                <Head>
                    <title>CodeOpsEditor | Let's Write Code</title>
                </Head>
                <Landing />
            </div>
        </>
    )
}
