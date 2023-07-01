"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ControlPanel, MobileInBox } from "@/components";
import { styles } from "@/styles/style";
import { PanelControllerProvider } from "@/context/PanelControllerContext";

type ContainerProps = {
    id?: string;
    containerClass?: string;
    wrapperClass?: string;
    children?: React.ReactNode;
};

type HolderProps = {
    className?: string;
    children: React.ReactNode;
};

type ModalSectionProps = {
    id: string;
    className?: string;
    children: React.ReactNode;
};

const Container = ({
    id,
    containerClass,
    wrapperClass,
    children,
}: ContainerProps) => {
    return (
        <div
            id={id}
            className={`relative h-screen w-full pt-[60px] overflow-hidden ${containerClass}`}
        >
            <section className={`h-full ${wrapperClass}`}>{children}</section>
        </div>
    );
};

const Holder = ({ className, children }: HolderProps) => {
    return (
        <div className={`w-full ${styles.flexCenter} ${className}`}>
            {children}
        </div>
    );
};

const ModalSection = ({ id, className, children }: ModalSectionProps) => {
    return (
        <section
            id={id}
            className={`sm:max-w-[70%] md:max-w-[55%] lg:max-w-[40%] p-2 ${styles.flexColumns} items-center justify-center ${className}`}
        >
            {children}
        </section>
    );
};

const ScrollSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const mm = gsap.matchMedia();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(
            ["#heading", "#modal-order-1", "#modal-order-2", "#modal-order-3"],
            { y: 50, opacity: 0 }
        );
        gsap.set(["#holder-inner", "#holder-middle", "#holder-outer"], {
            scale: 0,
            opacity: 0,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#section-1",
                start: "top top",
                end: "+=4000",
                scrub: true,
                toggleActions: "none none none reverse",
            },
        })
            .to("#heading", {
                y: 0,
                opacity: 1,
            })
            .to("#holder-inner", { scale: 1, opacity: 1 })
            .to("#holder-middle", { scale: 1, opacity: 1 })
            .to("#holder-outer", { scale: 1, opacity: 1 })
            .to("#modal-order-1", {
                y: 0,
                opacity: 1,
            })
            .to("#modal-order-2", { y: 0, opacity: 1 })
            .to("#modal-order-3", { y: 0, opacity: 1 })
            .to("#holder-outer", { scale: 0, opacity: 0 })
            .to("#holder-middle", { scale: 0, opacity: 0 })
            .to("#holder-inner", { scale: 0, opacity: 0 });

        mm.add(
            {
                isMobile: "(max-width: 768px)",
                isDesktop: "(min-width: 769px)",
            },
            (context) => {
                // @ts-ignore
                let { isMobile } = context.conditions;

                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#footer",
                        start: "bottom bottom",
                        end: "bottom bottom",
                        pin: true,
                        toggleActions: "restart none none none",
                        onLeaveBack: () => {
                            gsap.to("#mobile", {
                                yPercent: -20,
                                xPercent: 0,
                                scale: isMobile ? 0.5 : 0.7,
                                opacity: 0.3,
                                duration: 0.5,
                            });
                            gsap.to("#control-panel", {
                                opacity: 0,
                                duration: 0.5,
                            });
                        },
                    },
                })
                    .to("#mobile", {
                        yPercent: isMobile ? -50 : -30,
                        xPercent: isMobile ? 0 : 100,
                        duration: 1,
                    })
                    .to("#mobile", {
                        scale: isMobile ? 0.4 : 0.8,
                        opacity: 1,
                        duration: 1,
                    })
                    .to("#control-panel", { opacity: 1, duration: 0.5 });
            }
        );
    });

    return (
        <PanelControllerProvider>
            <div ref={ref}>
                <MobileInBox />
                <div>
                    <Container
                        id="section-1"
                        wrapperClass={`p-3 md:p-6 relative ${styles.flexColumns}`}
                    >
                        <section
                            id="heading"
                            className="w-max p-2 md:px-6 md:py-3 border-2 border-skin-primary rounded-full text-center"
                        >
                            <h1 className={`${styles.headingText}`}>
                                Showcase website
                            </h1>
                            <p className={`${styles.descriptionText}`}>
                                Made for the purpose of presenting my React
                                Native App.
                            </p>
                        </section>
                        <span
                            id="holder-inner"
                            className={`${
                                styles.absoluteCenter
                            } ${styles.ringCircle("w-[50%] md:w-1/4")} `}
                        />
                        <span
                            id="holder-middle"
                            className={`${
                                styles.absoluteCenter
                            } ${styles.ringCircle("w-[90%] md:w-1/2")} `}
                        />
                        <span
                            id="holder-outer"
                            className={`${
                                styles.absoluteCenter
                            } ${styles.ringCircle("w-[130%] md:w-3/4")}`}
                        />
                        <div
                            className={`absolute top-0 left-0 w-1/2 h-full ${styles.flexColumns} justify-center`}
                        >
                            <Holder>
                                <ModalSection id="modal-order-2">
                                    <h2
                                        className={`${styles.titleText} px-2 mb-2 rounded-lg bg-[--clr-primary] text-skin-background`}
                                    >
                                        composition
                                    </h2>
                                    <p
                                        className={`${styles.descriptionText} leading-6 text-justify`}
                                    >
                                        The website app is built using the React
                                        Native framework, and incorporating the
                                        animation effects achieved through the
                                        utilization of two packages: reanimated
                                        and gesture.
                                    </p>
                                </ModalSection>
                            </Holder>
                        </div>
                        <div className="absolute top-0 right-0 w-1/2 h-full">
                            <Holder className="h-1/2">
                                <ModalSection id="modal-order-1">
                                    <h2
                                        className={`${styles.titleText} inline px-2 mb-2 rounded-lg bg-[--clr-primary] text-skin-background`}
                                    >
                                        mobility
                                    </h2>
                                    <p
                                        className={`${styles.descriptionText} leading-6 text-justify`}
                                    >
                                        It is flexible app allows users to open
                                        it on their mobile devices whenever they
                                        want. (Android device is more
                                        suggested.)
                                    </p>
                                </ModalSection>
                            </Holder>
                            <Holder className="h-1/2">
                                <ModalSection id="modal-order-3">
                                    <h2
                                        className={`${styles.titleText} px-2 mb-2 rounded-lg bg-[--clr-primary] text-skin-background`}
                                    >
                                        overview
                                    </h2>
                                    <p
                                        className={`${styles.descriptionText} leading-6 text-justify`}
                                    >
                                        My React Native portfolio website offers
                                        an immersive experience to discover my
                                        skills, projects, and my programming
                                        journey.
                                    </p>
                                </ModalSection>
                            </Holder>
                        </div>
                    </Container>
                </div>
                <Container id="footer" wrapperClass="relative">
                    <ControlPanel />
                </Container>
            </div>
        </PanelControllerProvider>
    );
};

export default ScrollSection;
