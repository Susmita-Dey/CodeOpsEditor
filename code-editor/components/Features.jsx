import React from "react";
import FeatureCard from "./FeatureCard";
import SectionTitle from "./SectionTitle";

export default function Features() {
    return (
        <section className="container-mx-auto px-5 md:px-20 mb-12" id="features">
            <SectionTitle title={'Features'} subtitle={'We go by the following features.'} />
            <div className="flex md:flex-row flex-col justify-center items-center mt-4">
                <FeatureCard imgSrc="/themes.png" username="5+ Themes" about="Colorize your code editor and enjoy coding with your favorite theme." imgWidth={300} />
                <FeatureCard imgSrc="/programming.png" username="10+ languages" about="Code in your favorite programming language and execute it." imgWidth={200} />
                <FeatureCard imgSrc="/autocomplete.png" username="Autocomplete feature" about="Autocompletes your code by detecting the language." imgWidth={200} />
                <FeatureCard imgSrc="/open-source.png" username="Completely Open Sourced" about="You can contribute to this project and improve it." url="https://github.com/Susmita-Dey/CodeOpsEditor/" imgWidth={200} />
            </div>
        </section>
    )
}