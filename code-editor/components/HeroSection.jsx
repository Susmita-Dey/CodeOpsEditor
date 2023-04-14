import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
    return (
        <section className="container mx-auto py-40 bg-blue-950">
            <div className="flex flex-col md:flex-row justify-around gap-12 items-center">
                <div className="flex flex-col md:text-start md:justify-start text-center justify-center items-center gap-2">
                    <h2 className="text-5xl text-white font-bold">Make something great.</h2>
                    <h3 className="text-2xl text-white font-bold">Write code and compile it in your own way.</h3>
                    <div className="flex md:flex-row flex-col gap-4 my-2">
                        <Link href={'/signup'} className="rounded-md px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white">Start Coding</Link>
                        <Link href={'/writecode'} className="rounded-md px-5 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">Checkout the Demo</Link>
                    </div>
                </div>
                <iframe width="500" height="300" className="w-auto" src="https://www.youtube-nocookie.com/embed/YG3aPQrANdg" title="YouTube video player" frameBorder="2" allowFullScreen></iframe>
            </div>
        </section>
    )
}