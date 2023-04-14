import React from "react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function Features() {
    return (
        <section className="container-mx-auto px-5 md:px-20 mb-4" id="features">
            <SectionTitle title={'Features'} subtitle={'We go by the following features.'} />
            <div className="flex md:flex-row flex-col justify-center items-center mt-4">
                <Card imgSrc="https://images.unsplash.com/photo-1573621622238-f7ac6ac0429a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" username="Ideate" about="Code and execute" />
                <Card imgSrc="https://images.unsplash.com/photo-1573621622238-f7ac6ac0429a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" username="Ideate" about="Code and execute" />
                <Card imgSrc="https://images.unsplash.com/photo-1573621622238-f7ac6ac0429a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" username="Ideate" about="Code and execute" />
                <Card imgSrc="https://images.unsplash.com/photo-1573621622238-f7ac6ac0429a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" username="Ideate" about="Code and execute" />
            </div>
        </section>
    )
}