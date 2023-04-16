import React from "react";
import { classnames } from "../../utils/general";

const CustomInput = ({ customInput, setCustomInput }) => {
    return (
        <>
            {" "}
            <textarea
                rows="5"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder={`Custom input`}
                className={classnames(
                    "focus:outline-none w-96 flex justify-center items-center lg:w-full md:w-full h-56 border-2 border-blue-950 z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-gray-200 mt-2"
                )}
            ></textarea>
        </>
    );
};

export default CustomInput;