"use client";

import { motion } from "framer-motion";
import { framerAnimation } from "@/utils/framerVariants";
import SvgIcon from "./SvgIcon";
import { useLoadingState } from "@/context/loadingStateContext";
import { useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
    const { loading } = useLoadingState();

    const pageRefresh = () => {
        window.onbeforeunload = function () {
            scrollTo(0, 0);
        };

        location.reload();
    };

    useEffect(() => {
        const animation = gsap
            .timeline({ paused: true, delay: 1 })
            .fromTo("#head-border", { scaleX: 0 }, { scaleX: 1, duration: 1 })
            .to(
                "#head-icon-path",
                { strokeDashoffset: 0, duration: 1.5 },
                "icon"
            )
            .fromTo(
                "#head-icon-text",
                { xPercent: 100 },
                { xPercent: 0, duration: 0.5 },
                "icon"
            );

        if (!loading) animation.play();
    });

    return (
        <header className="fixed top-0 left-0 w-full h-[60px] flex justify-center items-center z-10">
            <div className="w-full py-[15px] ps-2 md:ps-4 lg:ps-6">
                <div
                    id="head-border"
                    className="h-[1px] shadow-[0px_2px_1px_1px_var(--clr-primary)] origin-left"
                ></div>
            </div>
            <div
                className="h-full flex flex-row items-center gap-2 px-6 md:px-8 lg:px-10 hover:cursor-pointer"
                onClick={pageRefresh}
            >
                <SvgIcon />
                <div className="overflow-hidden">
                    <span
                        id="head-icon-text"
                        className="inline-flex uppercase font-black text-[24px] leading-[30px] tracking-wider"
                    >
                        Box
                    </span>
                </div>
            </div>
            <div className="w-full py-[15px] pe-2 md:pe-4 lg:pe-6">
                <div
                    id="head-border"
                    className="h-[1px] shadow-[0px_2px_1px_1px_var(--clr-primary)] origin-right"
                ></div>
            </div>
        </header>
    );
};

export default Navbar;
