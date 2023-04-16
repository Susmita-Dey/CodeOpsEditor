import React, { useEffect } from "react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

// Animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export default function Team() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <section className="container mx-auto px-5 md:px-20 mt-2 mb-4 bg-blue-950 max-w-full bg-cover" id="team">
            <div data-aos="fade-up" className="text-white pt-1">
                <SectionTitle title={'Our Team'} subtitle={'The building blocks behind the project'} />
            </div>
            <div data-aos="fade-in" className="flex pb-5 md:flex-row flex-col justify-center items-center mt-4">
                <Card imgSrc="/Kunal.png" username="Kunal" about="DevOps Engineer" github="https://github.com/verma-kunal" />
                <Card imgSrc="/Tuhin.png" username="Tuhin" about="Web Developer" imgWidth={270} github="https://github.com/TuhinBanerjee31" />
                <Card imgSrc="/Susmita.png" username="Susmita" about="Web Developer" github="https://github.com/Susmita-Dey" />
                <Card imgSrc="/Shivang.png" username="Shivang" about="DevOps Engineer" github="https://github.com/ShivangShandilya" />
            </div>
        </section>
    )
}