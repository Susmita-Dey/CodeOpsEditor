import LoginComponent from '@/components/LoginComponent'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    return (
        <>
            <div>
                <Head>
                    <title>CodeOpsEditor | Log In</title>
                </Head>
                <LoginComponent />
            </div>
        </>
    )
}
