import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="mt-12 body-font">
                <div className="bg-blue-950 text-white w-full">
                    <div className="container mx-auto py-6 px-24 flex flex-wrap flex-col">
                        <p className="text-sm text-center ">
                            © 2023 CodeOpsEditor | Powered by CodeOpsEditor Team
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}