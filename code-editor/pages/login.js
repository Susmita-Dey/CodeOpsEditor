import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    return (
        <>
            <div>
                <Head>
                    <title>CodeOpsEditor | Log In</title>
                </Head>

                <section className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col text-xl gap-4">
                    <form action="/api/auth/loginAuth" method="POST" className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label>Enter Email:</label>
                            <input type="email" name="email" id="email" placeholder="susmita@example.com" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Enter Password:</label>
                            <input type="password" name="password" id="password" placeholder="*123165$5%^*SDYTRfgds" />
                        </div>
                        <div className="px-4 py-2 bg-blue-500 text-white text-center">
                            <button type="submit">Log In</button>
                        </div>
                        <p className="my-2 text-lg font-medium">Don't have an account? <Link href='/signup' className="text-blue-500 underline underline-offset-2">Create one</Link> account.</p>
                    </form>
                </div>
            </section>

            </div>
        </>
    )
}
