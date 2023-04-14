import React from "react";

export default function SectionTitle({ title, subtitle }) {
    return (
        <div className="px-4 text-center">
            <h1 className="text-4xl mt-20 heading">{title}</h1>
            <p className=" m-auto mt-5 text-xl">
                {subtitle}
            </p>
        </div>
    )
}