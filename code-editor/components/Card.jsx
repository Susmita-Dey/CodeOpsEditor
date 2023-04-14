import React from "react";
import Image from "next/image";

export default function Card({ imgSrc = 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', username = 'John', about = 'jjjjjjjj' }) {
    return (
        <>
            <div className="container mx-auto px-5 py-3 rounded-lg">
                <div className="flex flex-col gap-4 text-center shadow-md">
                    <Image src={imgSrc} width={100} height={0} className="w-full h-full rounded-t-lg" alt="feature" />
                    <div className="py-4">
                        <p className="font-medium text-lg">{username}</p>
                        <p className="font-medium text-base">{about}</p>
                    </div>
                </div>
            </div>
        </>
    )
}