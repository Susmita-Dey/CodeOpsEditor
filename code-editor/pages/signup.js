import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from "next/link"
import Image from "next/image";
import registerlogo from "../public/workplace.png"

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    return (
        <>
            <div>
                <Head>
                    <title>CodeOpsEditor | Sign Up</title>
                </Head>

                <section className="signup-box container mx-auto flex flex-col justify-center items-center">
                <div className="set-1 flex flex-row text-xl gap-4">
                    <div className='img-set'>
                        <Image src={registerlogo} alt='Sign Up Form' />
                    </div>
                    <form action="/api/auth/signupAuth" method="POST" className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <input type="text" name="fname" id="fname" placeholder="Enter Name" required/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <input type="email" name="email" id="email" placeholder="Enter Email" required/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <input type="password" name="password" id="password" placeholder="Enter Password" required/>
                        </div>
                        <div className="button-set px-4 py-2 text-white text-center">
                        <button type="submit">Register</button>
                        </div>
                        <p className="my-2 text-lg font-medium">Already have an account? <Link href='/login' className="text-blue-500 underline underline-offset-2">Login</Link> now.</p>
                    </form>
                </div>
            </section>

            </div>
        </>
    )
}
