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
                href="https://expo.dev/%40defgh/react-native-typescript?serviceType=eas&distribution=expo-go&scheme=exp%2Breact-native-typescript&channel=production&sdkVersion=48.0.0"
                className="absolute w-full h-full rounded-full"
            />
            <div
                className={`${styles.flexCenter} relative w-full h-full overflow-hidden pointer-events-none`}
            >
                <span>
                    <SiExpo id="expo-icon" className={`${styles.titleText}`} />
                </span>
                <span id="expo-icon-text" className={`${styles.titleText}`}>
                    expo
                </span>
            </div>
        </PanelButton>
    );
};
