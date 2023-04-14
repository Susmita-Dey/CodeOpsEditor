import Image from "next/image";
import React from "react";

export default function HeroSection() {
    return (
        <section className="container mx-auto mb-4 bg-blue-950">
            <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
                <h1 className="text-3xl text-center text-white font-bold">Hello World</h1>
                <Image src={'https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} width={800} height={500} className='w-full h-full' />
            </div>
        </section>
    )
}