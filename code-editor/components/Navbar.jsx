import React, { useState } from "react";
import { GoThreeBars } from 'react-icons/go'
import { ImCross } from 'react-icons/im'
import Link from "next/link";
import { AiFillCloud } from 'react-icons/ai'
import { BsGithub } from "react-icons/bs";

export default function Navbar() {
    const [mobile, setMobile] = useState(true)
    return (
        <>
            <nav className="container mx-auto">
                <div
                    id="navbar"
                    className="flex flex-wrap flex-row items-center justify-around px-5 sticky top-0 my-3 md:gap-0 gap-2"
                >
                    {/* <button onClick={() => setMobile(!mobile)}>
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
                    </button> */}
                    <Link
                        href="/" className="flex flex-row gap-1 title-font font-semibold text-3xl text-gray-900 md:-ml-96"
                    >
                        <AiFillCloud className="mt-1 text-4xl" /> CodeOpsEditor
                    </Link>
                    {/* <ul className={mobile ? "navlinks" : "navlinksmobile"}
                        onClick={() => setMobile(true)} > */}
                    <ul className="flex flex-row justify-evenly gap-4 md:gap-8 items-center text-lg">
                        <Link href="/">Home</Link>
                        <Link href="#features">Features</Link>
                        <Link href="#team">Team</Link>
                        <Link href="https://github.com/Susmita-Dey/CodeOpsEditor/" target='_blank' className="flex flex-row gap-1">Contribute <BsGithub className="text-xl mt-1" /></Link>
                    </ul>
                    {/* </ul> */}

                    <Link href="/signup">
                        <button className="px-5 py-2 text-white rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-lg">
                            Register
                        </button>
                    </Link>
                </div>
            </nav>
        </>
    )
}