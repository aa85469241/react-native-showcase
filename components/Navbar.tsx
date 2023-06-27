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
        <motion.nav
            className="w-full h-[60px] fixed top-0 flex justify-center z-10"
            initial="hidden"
            whileInView="visible"
        >
            <div className="w-full py-[15px] ps-2 md:ps-4 lg:ps-6">
                <motion.div
                    className="h-[30px] border-t-2 border-b-2 border-[--clr-primary] origin-left"
                    variants={framerAnimation.stretchX}
                    transition={{ duration: 1 }}
                ></motion.div>
            </div>
            <motion.div
                className="h-full flex flex-row items-center gap-2 px-6 md:px-8 lg:px-10 hover:cursor-pointer"
                onClick={pageRefresh}
            >
                <SvgIcon />
                <div className="overflow-hidden">
                    <motion.span
                        className="inline-flex uppercase font-black text-[24px] leading-[30px] tracking-wider"
                        variants={framerAnimation.FadeInDown}
                        custom={{ duration: 1 }}
                    >
                        Box
                    </motion.span>
                </div>
            </motion.div>
            <div className="w-full py-[15px] pe-2 md:pe-4 lg:pe-6">
                <motion.div
                    className="h-[30px] border-t-2 border-b-2 border-[--clr-primary] origin-right"
                    variants={framerAnimation.stretchX}
                    transition={{ duration: 1 }}
                ></motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
