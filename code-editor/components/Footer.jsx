import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillCloud } from 'react-icons/ai'

export default function Footer() {
    return (
        <>
            <footer className="text-gray-600 mt-8 body-font">
                <div className="container md:px-24 pb-12 mx-auto flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col items-center justify-center text-center">
                    <div className="w-full flex-shrink-0 mx-auto text-left">
                        <Link
                            href="/"
                            className="flex title-font font-semibold text-3xl items-center md:justify-start justify-center text-gray-900"
                        >
                            <AiFillCloud /> CodeInCloud
                            {/* <Image src={Logo} alt="Zynca logo" className="w-full h-full -mb-10" width={270} height={0} /> */}
                        </Link>
                        <p className="mt-2 text-xs md:px-0 px-8 text-gray-500 ">
                            The only online code editor you need.
                        </p>
                        <div className="mt-8">
                            <span className="flex sm:ml-auto sm:mt-0 md:justify-start justify-center">
                                <Link href="https://www.youtube.com/@zyncabiotics" target="_blank">
                                    <FaYoutube />
                                </Link>
                                <Link href="https://www.linkedin.com/in/zynca-biotics-269431269/" className="ml-3" target="_blank">
                                    <FaLinkedinIn />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-wrap items-start -mb-10 md:mt-0 mt-10 md:text-left text-center justify-evenly">
                        <div className="lg:w-1/4 w-full px-4">
                            <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
                                Pages
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-800 my-4"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="text-gray-600 hover:text-gray-800 my-4"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog"
                                        className="text-gray-600 hover:text-gray-800 my-4"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/shop"
                                        className="text-gray-600 hover:text-gray-800 my-4"
                                    >
                                        Products
                                    </Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-[#3F3F3F] text-white w-full">
                    <div className="container mx-auto py-6 px-24 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-sm text-center sm:text-left">
                            © 2023 CodeInCloud | Powered by CodeInCloud Team
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link href="/" target="_blank">
                                <FaYoutube />
                            </Link>
                            <Link href="/" className="ml-3" target="_blank">
                                <FaLinkedinIn />
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}