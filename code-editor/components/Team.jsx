import React from "react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function Team() {
    return (
        <section className="container-mx-auto px-5 md:px-20 mb-4 bg-blue-950 text-white" id="team">
            <SectionTitle title={'Our Team'} subtitle={'The building blocks behind the project'} />
            <div className="flex md:flex-row flex-col justify-center items-center mt-4">
                <Card imgSrc="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" username="John" about="Developer" />
                <Card imgSrc="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" username="John" about="Developer" />
                <Card imgSrc="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" username="John" about="Developer" />
                <Card imgSrc="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" username="John" about="Developer" />
            </div>
        </section>
    )
}