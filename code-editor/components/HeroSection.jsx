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
                    <Link href={'/signup'} className="rounded-md px-5 py-2 bg-sky-500 text-white">Start Coding</Link>
                </div>
                <iframe width="500" height="300" className="w-auto" src="https://www.youtube-nocookie.com/embed/YG3aPQrANdg" title="YouTube video player" frameBorder="2" allowFullScreen></iframe>
            </div>
        </section>
    )
}