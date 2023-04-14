import React from "react";

import { HiOutlineMinusSm } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import { Collapse } from "react-collapse";

const AccordionItems = ({ open, toggle, title, desc }) => {
    return (
        <div className="pt-10 text-[#3A3A3A]">
            <div
                onClick={toggle}
                className="px-2 flex justify-between items-center cursor-pointer border-t-2 border-[#3A3A3A] pt-4"
            >
                <p className="text-md md:text-xl max-w-[39ch] md:max-w-full text-start font-semibold ">{title}</p>
                <div className="text-sm md:text-xl">
                    {open ? <HiOutlineMinusSm className="text-red-600" /> : <BsPlusLg className="text-red-600" />}
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className="text-sm md:text-md px-2 md:px-3 mt-4">{desc}</div>
            </Collapse>
        </div>
    );
};

export default AccordionItems;