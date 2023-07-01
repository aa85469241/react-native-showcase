import { Transition } from "framer-motion";

const FadeInDown = {
    hidden: { y: "100%" },
    visible: (transitionParams: Transition) => ({
        y: "0%",
        transition: { ...transitionParams }
    })
}

const Appearing = {
    hidden: { opacity: 0 },
    visible: (transitionParams: Transition) => ({
        opacity: 1,
        transition: { ...transitionParams }
    })
}

const stretchX = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 }
}

const svgPath = {
    initial: {
        pathLength: 0,
    },
    animate: {
        pathLength: 1,
        transition: {
            duration: 2,
        },
    },
}

export const framerAnimation = {
    FadeInDown,
    Appearing,
    stretchX,
    svgPath,
}