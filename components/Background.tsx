"use client";

import { Paper_backdrop } from "@/public";
import Image from "next/image";

const Background = () => {
    return (
        <div className="fixed inset-0 bg-[--clr-bg] -z-10">
            <Image
                src={Paper_backdrop}
                alt="backdrop"
                className="w-full h-full mix-blend-multiply opacity-30"
            />
        </div>
    );
};

export default Background;
