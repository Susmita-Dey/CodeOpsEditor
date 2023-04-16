import Link from "next/link";
import React from "react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function Features() {
    return (
        <section className="container-mx-auto px-5 md:px-20 mb-4" id="features">
            <SectionTitle title={'Features'} subtitle={'We go by the following features.'} />
            <div className="flex md:flex-row flex-col justify-center items-center mt-4">
                <Card imgSrc="/themes.png" username="5+ Themes" about="Colorize your code editor and enjoy coding with your favorite theme." imgWidth={300} />
                <Card imgSrc="/programming.png" username="10+ languages" about="Code in your favorite programming language and execute it." imgWidth={200} />
                <Card imgSrc="/autocomplete.png" username="Autocomplete feature" about="Autocompletes your code by detecting the language." imgWidth={200} />
                {/* <Link href={'https://github.com/Susmita-Dey/CodeOpsEditor/'}> */}
                <Card imgSrc="/open-source.png" username="Completely Open Sourced" about="You can contribute to this project and improve it." imgWidth={200} />
                {/* </Link> */}
            </div>
        </section>
    )
}