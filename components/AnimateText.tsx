"use client";

import { FC } from "react";

interface AnimateTextProps {
    letters: string[];
    wrapperClassName?: string;
    textClassName?: string;
}

const AnimateText: FC<AnimateTextProps> = ({
    letters,
    wrapperClassName,
    textClassName,
}) => {
    return (
        <>
            {letters.map((letter, i) => (
                <span
                    key={`letter-${i}`}
                    className={`overflow-hidden ${wrapperClassName}`}
                >
                    <span
                        id={`letter-${i}`}
                        className={`text-[60px] sm:text-[72px] md:text-[80px] lg:text-[86px] xl:text-[114px] font-extrabold uppercase inline-block ${textClassName}`}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </>
    );
};

export default AnimateText;
