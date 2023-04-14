import React, { useState } from "react";
import { GoThreeBars } from 'react-icons/go'
import { ImCross } from 'react-icons/im'
import Link from "next/link";
import { AiFillCloud } from 'react-icons/ai'

export default function Navbar() {
    const [mobile, setMobile] = useState(true)
    return (
        <>
            <nav className="container mx-auto">
                <div
                    id="navbar"
                    className="flex flex-wrap flex-row items-center justify-between px-5 sticky top-0 my-3"
                >
                    <button onClick={() => setMobile(!mobile)}>
                        {!mobile ? (
                            <ImCross
                                id="hamicon"
                                className="fill-black ml-5 text-3xl border-t-0 border-b-0  md:hidden"
                            />
                        ) : (
                            <GoThreeBars
                                id="hamicon"
                                className=" fill-black ml-5 text-3xl border-t-0 border-b-0  md:hidden"
                            />
                        )}
                    </button>
                    <Link
                        href="/" className="flex title-font font-semibold text-3xl text-gray-900 md:-ml-96"
                    >
                        <AiFillCloud /> CodeInCloud
                    </Link>
                    <ul className={mobile ? "navlinks" : "navlinksmobile"}
                        onClick={() => setMobile(true)} >
                        <ul className="flex flex-row justify-center gap-4 items-center text-lg">
                            <Link href="/">Home</Link>
                            <Link href="#features">Features</Link>
                            <Link href="#team">Team</Link>
                            <Link href="/contact">Contact</Link>
                        </ul>
                    </ul>

                    <Link href="/signup">
                        <button className="w-24 px-1 py-2 rounded-md bg-blue-500 text-lg md:px-7 sm:text-20 md:w-36">
                            Register
                        </button>
                    </Link>
                </div>
            </nav>
        </>
    )
}