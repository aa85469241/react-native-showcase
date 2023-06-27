"use client";

import { useState, useLayoutEffect } from "react";

export const useWindowSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        // window.onbeforeunload = function () {
        //     window.scrollTo(0, 0);
        // };

        // location.reload();
    };

    useLayoutEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    });

    return size;
};
