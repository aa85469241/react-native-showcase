"use client";

import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LandingScreen, MockupBack, MockupFront } from "@/public";
import { usePanelController } from "@/context/PanelControllerContext";
import { screens } from "@/utils/screenData";

const Mobile = () => {
    const { state } = usePanelController();

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
                    className="absolute top-[2.5%] left-[5%] w-[90%] h-[95%] bg-black rounded-[40px] overflow-hidden z-10"
                >
                    <div
                        id="screen-scroller"
                        className={`w-[200%] h-full flex ${
                            state.isEnter && "-translate-x-1/2"
                        } duration-500`}
                    >
                        <div className="w-full">
                            <Image
                                src={LandingScreen}
                                alt="landing-page"
                                className="w-full h-full"
                            />
                        </div>
                        <div id="screen-wrapper" className="w-full">
                            {screens
                                .filter(
                                    (screen) =>
                                        screen.screenName === state.selectedPage
                                )
                                .map((_screen, i) => (
                                    <Image
                                        key={"screen-" + i}
                                        src={_screen.src}
                                        alt={_screen.screenName}
                                        className="w-full h-full"
                                    />
                                ))}
                        </div>
                    </div>
                    <div
                        id="screen-blanked"
                        className={`absolute inset-0 ${
                            state.power ? "opacity-0" : "opacity-100"
                        } bg-black duration-500`}
                    ></div>
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
