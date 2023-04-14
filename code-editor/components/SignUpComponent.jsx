import Link from "next/link";
import React from "react";

export default function SignUpComponent() {
    return (
        <>
            <section className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col text-xl gap-4">
                    <form action="" method="post" className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label>Enter Name:</label>
                            <input type="text" name="username" id="username" placeholder="Susmita" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Enter Email:</label>
                            <input type="email" name="email" id="email" placeholder="susmita@example.com" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Enter Password:</label>
                            <input type="password" name="" id="" placeholder="*123165$5%^*SDYTRfgds" />
                        </div>
                        <div className="px-4 py-2 bg-blue-500 text-white text-center">
                            <button type="submit">Log In</button>
                        </div>
                        <p className="my-2 text-lg font-medium">Already have an account? <Link href='/login' className="text-blue-500 underline underline-offset-2">Login</Link> now.</p>
                    </form>
                </div>
            </section>
        </>
    )
}