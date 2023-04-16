import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function Card({ imgSrc = 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', username = 'John', about = 'Developer', imgWidth = 300, github = 'https://github.com/Susmita-Dey/CodeOpsEditor' }) {
    return (
        <>
            <div className="container mx-auto px-5 py-3 hover:scale-90">
                <div className="flex flex-col gap-4 justify-center items-center text-center rounded-lg bg-white shadow-md">
                    <Image src={imgSrc} width={imgWidth} height={0} className="w-full h-full rounded-t-lg" alt="team" />
                    <div className="flex flex-col justify-center items-center text-center px-4 pb-4 gap-1">
                        <p className="font-semibold text-xl">{username}</p>
                        <p className="font-normal text-base">{about}</p>
                        <Link href={github} target='_blank' className='text-lg'>
                            <BsGithub />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}