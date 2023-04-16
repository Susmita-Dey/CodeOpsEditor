import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from "next/link"
import Image from "next/image"
import loginlogo from "../public/loginlogo.png"

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    return (
        <>
            <div>
                <Head>
                    <title>CodeOpsEditor | Log In</title>
                </Head>

                <section className="signup-box container mx-auto flex flex-col justify-center items-center">
                    <div className="set-1 flex flex-row text-xl gap-4">
                        <div className='img-set'>
                            <Image src={loginlogo} alt='Sign Up Form' />
                        </div>
                        <form action="/api/auth/loginAuth" method="POST" className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <input type="email" name="email" id="email" placeholder="Enter Email" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <input type="password" name="password" id="password" placeholder="Enter Password" required />
                            </div>
                            <div className="button-set px-4 py-2 text-white text-center">
                                <button type="submit">Log In</button>
                            </div>
                            <p className="my-2 text-lg font-medium">Don&apos;t have an account? <Link href='/signup' className="text-blue-500 underline underline-offset-2">Create one</Link> account.</p>
                        </form>
                    </div>
                </section>

            </div>
        </>
    )
}
