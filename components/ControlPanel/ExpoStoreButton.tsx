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
                href="https://expo.dev/preview/update?message=fixed&updateRuntimeVersion=exposdk%3A51.0.0&createdAt=2024-10-19T08%3A41%3A53.239Z&slug=exp&projectId=79de8a43-baa8-4bc2-9f58-7d83ac8f71ab&group=db80d40e-77d4-430e-a62b-60d415525381"
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
