import React from "react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function Team() {
    return (
        <section className="container mx-auto px-5 md:px-20 mt-2 mb-4 bg-blue-950" id="team">
            <div className="text-white pt-1">
                <SectionTitle title={'Our Team'} subtitle={'The building blocks behind the project'} />
            </div>
            <div className="flex md:flex-row flex-col justify-center items-center mt-4">
                <Card imgSrc="/Kunal.png" username="Kunal" about="DevOps Engineer" />
                <Card imgSrc="/Tuhin.png" username="Tuhin" about="Web Developer" />
                <Card imgSrc="/Susmita.png" username="Susmita" about="Web Developer" />
                <Card imgSrc="/Shivang.png" username="Shivang" about="DevOps Engineer" />
            </div>
        </section>
    )
}