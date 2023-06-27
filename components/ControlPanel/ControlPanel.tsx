"use client";

import { useEffect, useRef, useState } from "react";
import { usePanelController } from "@/context/PanelControllerContext";
import { styles } from "@/styles/style";
import { quests } from "@/utils/screenData";
import gsap from "gsap";
import {
    EnterButton,
    ExpoStoreButton,
    PageSelectButton,
    PowerButton,
} from "./buttons";

const ControlPanel = () => {
    const { state } = usePanelController();
    const HorizontalLineRef = useRef<HTMLSpanElement>(null);
    const VerticalLineRef = useRef<HTMLSpanElement>(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (HorizontalLineRef.current && VerticalLineRef.current) {
            setWidth(HorizontalLineRef.current.offsetWidth);
            setHeight(VerticalLineRef.current.offsetHeight);
        }

        const step1 = gsap
            .timeline({ paused: true })
            .to(
                "#quest-0",
                {
                    textDecorationLine: "line-through",
                    opacity: 0.2,
                    duration: 1,
                },
                "start"
            )
            .to(
                "#horizontal-line-path-1",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                },
                "start"
            )
            .to("#enter-button", { scale: 1, duration: 0.5 });

        const step2 = gsap
            .timeline({ paused: true })
            .to(
                "#quest-1",
                {
                    textDecorationLine: "line-through",
                    opacity: 0.2,
                    duration: 1,
                },
                "start"
            )
            .to(
                "#vertical-line-path-1",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                },
                "start"
            )
            .to("#page-select-button", { scale: 1, duration: 0.5 });

        const step3 = gsap
            .timeline({ paused: true })
            .to(
                "#quest-2",
                {
                    textDecorationLine: "line-through",
                    opacity: 0.2,
                    duration: 1,
                },
                "start"
            )
            .to(
                "#horizontal-line-path-2",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                },
                "start"
            )
            .to("#expo-store-button", { scale: 1, duration: 0.5 })
            .to(
                "#expo-icon",
                { rotate: 1080, xPercent: 300, duration: 1 },
                "expo-icon"
            )
            .to("#expo-icon-text", { xPercent: -300, duration: 1 }, "expo-icon")
            .to("#vertical-line-path-2", { strokeDashoffset: 0, duration: 1 });

        if (state.power) step1.play();
        if (state.isEnter) step2.play();
        if (state.selectedPage) step3.play();
    }, [width, height, state.power, state.isEnter, state.selectedPage]);

    return (
        <div
            id="control-panel"
            className="absolute bottom-0 w-full md:w-[60%] h-1/2 md:h-4/5 lg:h-full opacity-0"
        >
            <div className="relative w-full h-full grid grid-cols-3 grid-rows-[40%_20%_40%] place-items-center p-2 md:p-4">
                <PowerButton id="power-button" className="cursor-auto" />
                <span
                    ref={HorizontalLineRef}
                    className="relative w-full h-auto"
                >
                    <svg
                        viewBox={`0 0 ${width} 5`}
                        fill="none"
                        strokeWidth={10}
                        className="w-full h-full"
                    >
                        <g>
                            <path
                                id="horizontal-line-path-1"
                                d={`M 0 0 L ${width} 0`}
                                stroke="var(--clr-primary)"
                                strokeDasharray={width}
                                strokeDashoffset={width}
                            />
                            <path
                                d={`M 0 0 L ${width} 0`}
                                strokeDasharray={5}
                                stroke="#dbd3c3"
                            />
                        </g>
                    </svg>
                </span>
                <EnterButton id="enter-button" className="scale-0" />
                <span
                    ref={VerticalLineRef}
                    className="h-full col-start-3 row-start-2"
                >
                    <svg
                        viewBox={`0 0 5 ${height}`}
                        fill="none"
                        strokeWidth={10}
                        className="h-full"
                    >
                        <g>
                            <path
                                id="vertical-line-path-1"
                                d={`M 0 0 L 0 ${height}`}
                                stroke="var(--clr-primary)"
                                strokeDasharray={height}
                                strokeDashoffset={height}
                            />
                            <path
                                d={`M 0 0 L 0 ${height}`}
                                strokeDasharray={5}
                                stroke="#dbd3c3"
                            />
                        </g>
                    </svg>
                </span>
                <PageSelectButton
                    id="page-select-button"
                    className="col-start-3 row-start-3 scale-0"
                />
                <span
                    ref={HorizontalLineRef}
                    className="w-full h-auto col-start-2 row-start-3"
                >
                    <svg
                        viewBox={`0 0 ${width} 5`}
                        fill="none"
                        strokeWidth={10}
                        className="w-full h-auto"
                    >
                        <g>
                            <path
                                id="horizontal-line-path-2"
                                d={`M ${width} 0 L 0 0`}
                                stroke="var(--clr-primary)"
                                strokeDasharray={width}
                                strokeDashoffset={width}
                            />
                            <path
                                d={`M 0 0 L ${width} 0`}
                                strokeDasharray={5}
                                stroke="#dbd3c3"
                            />
                        </g>
                    </svg>
                </span>
                <ExpoStoreButton
                    id="expo-store-button"
                    className="col-start-1 row-start-3 scale-0"
                />
                <span ref={VerticalLineRef} className="h-full">
                    <svg
                        viewBox={`0 0 5 ${height}`}
                        fill="none"
                        strokeWidth={10}
                        className="h-full"
                    >
                        <g>
                            <path
                                id="vertical-line-path-2"
                                d={`M 0 ${height} L 0 0`}
                                stroke="var(--clr-primary)"
                                strokeDasharray={height}
                                strokeDashoffset={height}
                            />
                            <path
                                d={`M 0 0 L 0 ${height}`}
                                strokeDasharray={5}
                                stroke="#dbd3c3"
                            />
                        </g>
                    </svg>
                </span>
                <ul
                    id="check-list"
                    className={`${styles.absoluteCenter} text-center p-4`}
                >
                    {quests.map((quest, index) => (
                        <li
                            key={index}
                            id={"quest-" + index}
                            className={`relative ${styles.descriptionText} mb-2 last:mb-0 decoration-2 decoration-[--clr-primary]`}
                        >
                            {quest}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ControlPanel;
