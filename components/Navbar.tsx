"use client";

import { motion } from "framer-motion";
import { framerAnimation } from "@/utils/framerVariants";
import SvgIcon from "./SvgIcon";

const Navbar = () => {
    const pageRefresh = () => {
        window.onbeforeunload = function () {
            scrollTo(0, 0);
        };

        location.reload();
    };

    return (
        <header className="w-full h-[60px] fixed top-0 flex justify-center z-10">
            <div className="w-full py-[15px] ps-2 md:ps-4 lg:ps-6">
                <div className="h-[30px] border-t-2 border-b-2 border-[--clr-primary] origin-left"></div>
            </div>
            <div
                className="h-full flex flex-row items-center gap-2 px-6 md:px-8 lg:px-10 hover:cursor-pointer"
                onClick={pageRefresh}
            >
                <SvgIcon />
                <div className="overflow-hidden">
                    <span className="inline-flex uppercase font-black text-[24px] leading-[30px] tracking-wider">
                        Box
                    </span>
                </div>
            </div>
            <div className="w-full py-[15px] pe-2 md:pe-4 lg:pe-6">
                <div className="h-[30px] border-t-2 border-b-2 border-[--clr-primary] origin-right"></div>
            </div>
        </header>
    );
};

export default Navbar;
