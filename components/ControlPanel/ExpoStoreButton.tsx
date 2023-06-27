import React from "react";
import { PanelButton } from "./PanelButton";
import { styles } from "@/styles/style";
import { SiExpo } from "react-icons/si";
import Link from "next/link";

export const ExpoStoreButton = ({
    id,
    className,
}: {
    id: string;
    className: string;
}) => {
    return (
        <PanelButton id={id} serialNumber={4} className={className}>
            <Link
                href="https://expo.dev/@defgh/react-native-typescript?serviceType=classic&distribution=expo-go"
                className={`relative w-full h-full ${styles.flexCenter} overflow-hidden`}
            >
                <SiExpo
                    id="expo-icon"
                    className={`${styles.headingText} -rotate-[1080deg] -translate-x-[300%]`}
                />
                <span
                    id="expo-icon-text"
                    className={`${styles.titleText} translate-x-[300%]`}
                >
                    expo
                </span>
            </Link>
        </PanelButton>
    );
};
