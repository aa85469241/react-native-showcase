"use client";

import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    HomeScreen,
    HomeToPython,
    HomeToWeb,
    LandingScreen,
    MockupBack,
    MockupFront,
} from "@/public";
import { styles } from "@/styles/style";
import { usePanelController } from "@/context/PanelControllerContext";

type MarkerProps = {
    outlineClass?: string;
    serialNumberDiameter: number;
    serialNumber: string;
    serialNumberClass?: string;
};

type MobileProps = {
    screenClassName?: string;
    children?: React.ReactNode;
};

const Marker = ({
    outlineClass,
    serialNumberDiameter,
    serialNumber,
    serialNumberClass,
}: MarkerProps) => {
    return (
        <div
            className={`absolute border-4 border-skin-primary ${outlineClass}`}
        >
            <div className="relative w-full h-full">
                <div
                    className={`absolute
                    w-[${serialNumberDiameter}px] 
                    h-[${serialNumberDiameter}px] 
                    bg-[--clr-primary] rounded-[50%] p-2 ${styles.flexCenter}`}
                    style={{
                        top: `-${serialNumberDiameter / 2}px`,
                        right: `-${serialNumberDiameter / 2}px`,
                    }}
                >
                    <div
                        className={`text-skin-background ${serialNumberClass}`}
                    >
                        {serialNumber}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Mobile = ({ screenClassName, children }: MobileProps) => {
    const { state } = usePanelController();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (state.isEnter) {
            gsap.to("#screen-scroller", { xPercent: -100 });
        }
    });

    return (
        <div
            id="mobile"
            className="relative w-fit h-screen max-h-screen origin-center -z-10"
            style={{
                transformStyle: "preserve-3d",
            }}
        >
            {/* mobile front side */}
            <div
                id="front-side"
                className="relative h-full"
                style={{ backfaceVisibility: "hidden" }}
            >
                <Image
                    src={MockupFront}
                    alt="front"
                    className="w-auto h-full"
                />
                <div
                    id="mobile-screen"
                    className={`absolute top-[2.5%] left-[5%] w-[90%] h-[95%] rounded-[40px] overflow-hidden z-10 ${screenClassName}`}
                >
                    <div id="screen-scroller" className="w-full h-full flex">
                        <Image
                            src={LandingScreen}
                            alt="landing-page"
                            className="h-full"
                        />
                        {state.selectedPage ? (
                            <Image
                                src={
                                    state.selectedPage === "python"
                                        ? HomeToPython
                                        : HomeToWeb
                                }
                                alt={`${state.selectedPage} + -page`}
                                className="h-full"
                            />
                        ) : (
                            <Image
                                src={HomeScreen}
                                alt="home-page"
                                className="h-full"
                            />
                        )}
                    </div>
                    <div
                        id="screen-blanked"
                        className={`absolute inset-0 ${
                            state.power ? "opacity-0" : "opacity-100"
                        } bg-black duration-500`}
                    ></div>
                    {children}
                </div>
            </div>
            {/* mobile back side */}
            <div
                id="back-side"
                className="absolute top-0 left-0 h-full"
                style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                }}
            >
                <Image src={MockupBack} alt="back" className="w-auto h-full" />
            </div>
        </div>
    );
};

export default Mobile;
