import { styles } from "@/styles/style";
import { FC } from "react";

interface ButtonProps {
    id: string;
    className?: string;
    serialNumber: number;
    onClick?: () => void;
    children?: React.ReactNode;
}

export const PanelButton: FC<ButtonProps> = ({
    id,
    className,
    serialNumber,
    onClick,
    children,
}) => {
    return (
        <div
            id={id}
            className={`relative cursor-pointer w-[7.5rem] h-[7.5rem] md:w-[9rem] md:h-[9rem] lg:w-[10rem] lg:h-[10rem] xl:w-[12rem] xl:h-[12rem]  rounded-full shadow-[--clr-primary] shadow-[2px_2px_4px] origin-center ${className}`}
            onClick={onClick}
        >
            <div className="absolute bottom-0 right-0 flex items-center justify-center bg-[--clr-primary] h-[35px] md:h-[40px] lg:h-[50px] aspect-square rounded-full z-30">
                <span className={`${styles.titleText} text-skin-background`}>
                    {serialNumber}
                </span>
            </div>
            {children}
        </div>
    );
};
