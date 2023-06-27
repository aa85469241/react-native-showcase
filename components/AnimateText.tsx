"use client";

import { FC } from "react";
import { Variants, motion, Transition } from "framer-motion";

interface AnimateTextProps {
    letters: string[];
    wrapperClassName?: string;
    textClassName?: string;
    variants?: Variants;
    transition?: Transition;
}

const AnimateText: FC<AnimateTextProps> = ({
    letters,
    wrapperClassName,
    textClassName,
    variants,
    transition,
}) => {
    return (
        <>
            {letters.map((letter, i) => (
                <motion.span
                    key={`letter-${i}`}
                    className={`overflow-hidden ${wrapperClassName}`}
                    initial="hidden"
                    whileInView="visible"
                >
                    <motion.span
                        id={`letter-${i}`}
                        className={`text-[60px] sm:text-[72px] md:text-[80px] lg:text-[86px] xl:text-[114px] font-extrabold uppercase inline-block ${textClassName}`}
                        variants={variants}
                        custom={transition}
                    >
                        {letter}
                    </motion.span>
                </motion.span>
            ))}
        </>
    );
};

export default AnimateText;
