import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeatureCard({ imgSrc = 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', username = 'John', about = 'Developer', url = '', imgWidth = 300 }) {
    return (
        <>
            <div className="container mx-auto px-5 py-4  hover:scale-110">
                <div className="flex flex-col justify-center items-center gap-4 text-center rounded-lg bg-white shadow-md">
                    <Image src={imgSrc} width={imgWidth} height={0} className="w-1/2 mt-2 h-full rounded-t-lg" alt="feature" />
                    <div className="pb-4">
                        <Link href={url} target='_blank' className="font-semibold mt-2 text-xl">{username}</Link>
                        <p className="font-normal text-base mx-4 mt-2 mb-4">{about}</p>
                    </div>
                </div>
            </div>
        </>
    )
}