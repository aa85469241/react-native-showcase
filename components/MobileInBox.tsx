"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Delivery_box, Mobile, AnimateText } from "@/components";
import { framerAnimation } from "@/utils/framerVariants";
import { styles } from "@/styles/style";
import { motion } from "framer-motion";

const MobileInBox = () => {
    const ref = useRef<HTMLDivElement>(null);
    let mm = gsap.matchMedia();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let trigger = ref.current;

        // scroll down arrow animation //
        gsap.to("._arrow-wrap", {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 0.6,
            ease: "none",
        });
        gsap.to("._arrow-wrap", {
            scrollTrigger: {
                trigger: trigger,
                start: "top top",
                end: "bottom 20%",
                scrub: true,
            },
            opacity: 0,
        });

        //hero text animation //
        const letterFadeOut = gsap.to(".letter-1", {
            yPercent: -100,
        });

        ScrollTrigger.create({
            trigger: trigger,
            start: "40% top",
            end: "bottom+=200px top",
            scrub: true,
            animation: letterFadeOut,
        });

        // box & mobile animation //
        gsap.set("#mobile", {
            scale: 0,
            transformOrigin: "center center",
        });
        gsap.set(".box-lid", { transformOrigin: "center left" });

        // ref.current //
        gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
            },
        })
            .to("#mobile", { scale: 0.1 }, "tape-off")
            .to(".box-tape-1", { y: -50, x: -30, opacity: 0 }, "tape-off")
            .to(".box-tape-2", { y: -60, x: 50, opacity: 0 }, "tape-off")
            .to(".box-lid", { y: -30 }, "box-open")
            .to(".box-shadow", { opacity: 0.4 }, "box-open")
            .to(".box-lid", { rotate: -20, x: -30, opacity: 0 })
            .to("#mobile", { yPercent: -30, zIndex: 0 });

        mm.add(
            {
                isMobile: "(max-width: 768px)",
                isDesktop: "(min-width: 769px)",
            },
            (context) => {
                // @ts-ignore
                let { isMobile } = context.conditions;

                // #section-1 //
                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#section-1",
                        start: "top top",
                        end: "+=4000",
                        scrub: true,
                        pin: true,
                    },
                })
                    .to(
                        "#mobile",
                        {
                            scale: isMobile ? 0.5 : 0.7,
                            rotateY: 360,
                            yPercent: -20,
                        },
                        "outer"
                    )
                    .to(".box", { scale: 0, opacity: 0 }, "outer")
                    .to("#mobile", { opacity: 0.3 });
            }
        );
    });

    return (
        <motion.div
            ref={ref}
            className="sticky inset-0 max-h-screen h-screen w-full pt-[60px] overflow-hidden"
            initial="hidden"
            whileInView="visible"
        >
            <div
                className={`h-full ${styles.flexColumns} items-center justify-around`}
            >
                <div
                    id="hero-section"
                    className="max-w-full flex flex-1 flex-col lg:flex-row lg:gap-6 items-center justify-center"
                >
                    <AnimateText
                        letters={["something", "in box?"]}
                        textClassName="letter-1 tracking-wider lg:tracking-widest whitespace-nowrap"
                        variants={framerAnimation.Appearing}
                        transition={{ duration: 1.5 }}
                    />
                </div>
                <motion.div
                    className={`flex-1 ${styles.flexColumns} items-center justify-center gap-6 pb-6`}
                    variants={framerAnimation.Appearing}
                    custom={{ duration: 1.5 }}
                >
                    <div className="_arrow-wrap flex flex-col items-center -z-10">
                        <span className="_arrow border-skin-primary border-r-8 border-b-8 w-[30px] h-[30px] rotate-45"></span>
                        <span className="_arrow border-skin-primary border-r-8 border-b-8 w-[30px] h-[30px] rotate-45"></span>
                        <span className="_arrow border-skin-primary border-r-8 border-b-8 w-[30px] h-[30px] rotate-45"></span>
                        <span className="mt-4 font-semibold tracking-wider">
                            scroll down
                        </span>
                    </div>
                    <div className="relative">
                        <Delivery_box />
                        <div className="mobile-wrapper w-full h-full absolute inset-0 flex items-center justify-center">
                            <Mobile />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default MobileInBox;
