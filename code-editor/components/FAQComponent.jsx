import React, { useState } from "react";
import AccordionItems from "./AccordionItems";
import SectionTitle from "./SectionTitle";

export default function FaqComponent() {
    const [open, setOpen] = useState(false);
    const toggle = (index) => {
        if (open === index) {
            return setOpen(null);
        } else {
            setOpen(index);
        }
    };

    const accordiondata = [
        {
            title: "How many languages does the code editor supports?",
            desc: "It supports more than 10 languages",
        },
        {
            title: "Do I need to install to use it?",
            desc: "You don't need to install anything. You just need to sign up and you're ready to use our code editor.",
        },
        {
            title: "Is it a paid software?",
            desc: "Luckily, it's completely free and open source. Also, it has been built in WeMakeDevs X Napptive hackathon.",
        },
        {
            title:
                "Can I use it without registering?",
            desc: "We understand that managing so many accounts is tough. But we're sorry for having this feature.",
        },
        {
            title:
                "I've some specific queries to ask. How shall I contact the developers?",
            desc: "We're happy to support you and help you to solve your queries. Feel free to contact us via contact page.",
        },
    ];
    return (
        <div className="container mx-auto mb-4">
            <SectionTitle title='Frequently Asked Questions' subtitle='Need some help? Our most frequently asked questions are available to
                support you.' />
            <div className="px-4 md:px-20 text-justify">
                {accordiondata.map((data, index) => {
                    return (
                        <AccordionItems
                            key={index}
                            open={index === open}
                            title={data.title}
                            desc={data.desc}
                            toggle={() => toggle(index)}
                        />
                    );
                })}
            </div>
        </div>
    )
}