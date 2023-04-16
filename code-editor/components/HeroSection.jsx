import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
    return (
        <section className="container mx-auto -mt-2 py-24 bg-blue-950">
            <div className="flex flex-col md:flex-row justify-around gap-12 items-center">
                <div className="flex flex-col md:justify-start mx-2 text-center justify-center items-center gap-2">
                    <h2 className="text-5xl text-white font-bold">Make something great.</h2>
                    <h3 className="text-2xl text-white font-bold">Write code and compile it in your own way.</h3>
                    <div className="flex md:flex-row flex-col gap-4 my-2">
                        <Link href={'/signup'} className="rounded-md px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white">Start Coding</Link>
                        <Link href={'/writecode'} className="rounded-md px-5 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-700 hover:to-indigo-700 text-white">Checkout the Demo</Link>
                    </div>
                </div>
                <iframe
                    src='https://www.youtube-nocookie.com/embed/YG3aPQrANdg'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                    className='mt-8 block aspect-video h-full w-full max-w-[50rem] rounded-xl border-2 object-cover shadow-[0_1rem_3rem] shadow-primary/80'
                ></iframe>
            </div>
        </section>
    )
}