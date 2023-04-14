import React, { useState } from "react";
import { GoThreeBars } from 'react-icons/go'
import { RxCross1 } from 'react-icons/rx'
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [mobile, setMobile] = useState(false)
    return (
        <>
            <nav className="container mx-auto">
                {/* <div>
                    <div></div>
                    <div></div>
                </div> */}
                <div
                    id="navbar"
                    className="flex flex-row items-center justify-start w-96 md:w-auto ml-5 sticky top-0 bg-white"
                >
                    <button onClick={() => setMobile(!mobile)}>
                        {!mobile ? (
                            <RxCross1
                                id="hamicon"
                                className="mobile-menu-icon text-xl font-medium md:hidden"
                            />
                        ) : (
                            <GoThreeBars
                                id="hamicon"
                                className="mobile-menu-icon text-3xl border-t-0 border-b-0 font-medium md:hidden"
                            />
                        )}
                    </button>
                    <Link
                        href="/"
                    >
                        <Image src={'/next.svg'} alt="Zynca logo" className="-mt-12 -mb-5 md:-mt-24 md:-mb-10" width={270} height={0} />
                    </Link>
                </div>

                <Link href="/shop">
                    <button className="w-24 px-1 py-2 rounded-md  text-lg md:px-7 sm:text-20 md:w-36">
                        Buy Now
                    </button>
                </Link>
            </nav>
        </>
    )
}