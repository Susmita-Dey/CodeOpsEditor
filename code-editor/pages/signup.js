import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    return (
        <>
            <div>
                <Head>
                    <title>CodeOpsEditor | Sign Up</title>
                </Head>

                <section className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col text-xl gap-4">
                    <form action="/api/auth/signupAuth" method="POST" className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label>Enter Name:</label>
                            <input type="text" name="fname" id="fname" placeholder="Susmita" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Enter Email:</label>
                            <input type="email" name="email" id="email" placeholder="susmita@example.com" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Enter Password:</label>
                            <input type="password" name="password" id="password" placeholder="*123165$5%^*SDYTRfgds" />
                        </div>
                        <div className="px-4 py-2 bg-blue-500 text-white text-center">
                        <input type="submit" value="Register"></input>
                        </div>
                        <p className="my-2 text-lg font-medium">Already have an account? <Link href='/login' className="text-blue-500 underline underline-offset-2">Login</Link> now.</p>
                    </form>
                </div>
            </section>

            </div>
        </>
    )
}
