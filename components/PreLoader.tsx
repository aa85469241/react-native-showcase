"use client";

import React, { useEffect, useState } from "react";
import { styles } from "@/styles/style";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion } from "framer-motion";
import { framerAnimation } from "@/utils/framerVariants";
import { useLoadingState } from "@/context/loadingStateContext";

const PreLoader = () => {
    const { loading, setLoading } = useLoadingState();

    useEffect(() => {
        gsap.registerPlugin(MotionPathPlugin);

        const showButton = gsap.to("#preloader-entering-button", {
            opacity: 1,
            pointerEvents: "auto",
            duration: 1,
            paused: true,
        });

        gsap.to("#jumping-box", {
            duration: 2,
            ease: "power3.in",
            repeat: 4,
            immediateRender: true,
            motionPath: {
                path: "#path",
                align: "#path",
                alignOrigin: [0.5, 1],
            },
            onComplete: () => {
                showButton.play();
            },
        });

        const main = document.querySelector("#main");

        if (loading && !main?.classList.contains("overflow-hidden")) {
            main?.classList.add("overflow-hidden");
        } else {
            gsap.fromTo(
                "#_preloader",
                { clipPath: "circle(150% at 50% 50%)" },
                {
                    clipPath: "circle(0% at 50% 50%)",
                    duration: 1,
                    onComplete: () => main?.classList.remove("overflow-hidden"),
                }
            );
        }
    });

    return (
        <motion.div
            id="_preloader"
            className={`fixed inset-0 bg-[--clr-bg] z-30 overflow-hidden`}
            initial="hidden"
            whileInView="visible"
        >
            <motion.div
                className={`h-full ${styles.flexColumns} justify-center items-center`}
                variants={framerAnimation.Appearing}
            >
                <div className="w-[60%] md:w-[40%] lg:w-[20%] h-auto pb-6">
                    <svg
                        viewBox="-100 -255 400 250"
                        fill="none"
                        className="w-full h-full"
                        // stroke="#000000"
                        // strokeWidth={1}
                    >
                        <path id="path" d="M0,0 L200,0 C180,-180 20,-180 0,0" />
                        <g id="jumping-box" className="scale-[0.15]">
                            <path
                                d="M925.6 869.6H98.4c-22.4 0-40-17.6-40-40V296c0-22.4 17.6-40 40-40h826.4c22.4 0 40 17.6 40 40v533.6c0.8 21.6-17.6 40-39.2 40z"
                                fill="#D6AB7F"
                            ></path>
                            <path
                                d="M925.6 877.6H98.4c-26.4 0-48-21.6-48-48V296c0-26.4 21.6-48 48-48h826.4c26.4 0 48 21.6 48 48v533.6c0.8 26.4-20.8 48-47.2 48zM98.4 264c-17.6 0-32 14.4-32 32v533.6c0 17.6 14.4 32 32 32h826.4c17.6 0 32-14.4 32-32V296c0-17.6-14.4-32-32-32H98.4z"
                                fill="#6A576D"
                            ></path>
                            <path
                                d="M925.6 256H98.4c-22.4 0-40 17.6-40 40v65.6c4 0.8 8.8 0.8 13.6 0.8h880c4.8 0 8.8-0.8 13.6-0.8V296c0-22.4-18.4-40-40-40z"
                                fill="#6A576D"
                            ></path>
                            <path
                                d="M952 314.4H72c-22.4 0-40-17.6-40-40v-80c0-22.4 17.6-40 40-40h880c22.4 0 40 17.6 40 40v80c0 22.4-17.6 40-40 40z"
                                fill="#D6AB7F"
                            ></path>
                            <path
                                d="M632 552H392c-22.4 0-40-17.6-40-40v-26.4c0-22.4 17.6-40 40-40h240c22.4 0 40 17.6 40 40V512c0 22.4-17.6 40-40 40z"
                                fill="#FFFFFF"
                            ></path>
                            <path
                                d="M632 560H392c-26.4 0-48-21.6-48-48v-26.4c0-26.4 21.6-48 48-48h240c26.4 0 48 21.6 48 48V512c0 26.4-21.6 48-48 48zM392 453.6c-17.6 0-32 14.4-32 32V512c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32v-26.4c0-17.6-14.4-32-32-32H392z"
                                fill="#6A576D"
                            ></path>
                            <path
                                d="M952 322.4H72c-26.4 0-48-21.6-48-48v-80c0-26.4 21.6-48 48-48h880c26.4 0 48 21.6 48 48v80c0 26.4-21.6 48-48 48zM72 162.4c-17.6 0-32 14.4-32 32v80c0 17.6 14.4 32 32 32h880c17.6 0 32-14.4 32-32v-80c0-17.6-14.4-32-32-32H72z"
                                fill="#6A576D"
                            ></path>
                        </g>
                    </svg>
                    <div
                        id="ground"
                        className="w-full h-[5px] bg-[--clr-secondary] rounded-[50%]"
                    ></div>
                </div>
                <motion.button
                    id="preloader-entering-button"
                    className={`${styles.flexCenter} gap-4 opacity-0 pointer-events-none`}
                    onClick={() => setLoading(false)}
                    initial="initial"
                    whileHover="hovered"
                    whileTap={{ scale: [1, 0.8, 1] }}
                >
                    <span>
                        <svg
                            width="120"
                            height="30"
                            viewBox="0 0 198 37"
                            fill="none"
                            className="stroke-[--clr-primary] stroke-[4px]"
                        >
                            <motion.path
                                d="M0.5 18H162.5L182 35L196.5 18L182 1.5L171.5 13L182 18"
                                variants={framerAnimation.bracketPath}
                            />
                        </svg>
                    </span>
                    <span className={`${styles.titleText} tracking-wider`}>
                        Enter
                    </span>
                    <span>
                        <svg
                            width="120"
                            height="30"
                            viewBox="0 0 198 37"
                            fill="none"
                            className="stroke-[--clr-primary] stroke-[4px]"
                        >
                            <motion.path
                                d="M197.5 18H35.5L16 35L1.5 18L16 1.5L26.5 13L16 18"
                                variants={framerAnimation.bracketPath}
                            />
                        </svg>
                    </span>
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default PreLoader;
