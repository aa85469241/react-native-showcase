import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { PanelButton } from "./PanelButton";
import { styles } from "@/styles/style";
import { CONTROL_ACTION } from "@/context/PanelControllerReducer";
import { usePanelController } from "@/context/PanelControllerContext";

export const EnterButton = ({
    id,
    className,
}: {
    id: string;
    className?: string;
}) => {
    const { state, dispatch } = usePanelController();
    const [scope, animate] = useAnimate();

    const handleOnClick = () => {
        if (state.power) dispatch({ type: CONTROL_ACTION.ENTERING });
    };

    useEffect(() => {
        if (state.isEnter) {
            animate(
                "#check-icon-path",
                {
                    pathLength: 1,
                },
                { duration: 1 }
            );
            animate("#hover-bubble", { scale: [0.8, 1] });
            animate("#enter-text", { y: "100%" });
        }
    }, [state.isEnter, animate]);

    return (
        <PanelButton
            id={id}
            serialNumber={2}
            className={className}
            onClick={handleOnClick}
        >
            <motion.div
                ref={scope}
                className={`h-full ${styles.flexCenter}`}
                initial="initial"
                whileHover={`${state.isEnter ? "" : "hovered"}`}
            >
                <div className="absolute inset-0 w-full h-full p-2 overflow-hidden rounded-full origin-center">
                    <motion.div
                        id="hover-bubble"
                        className="w-full h-full bg-[--clr-primary] rounded-full"
                        variants={{
                            initial: { scale: 0 },
                            hovered: { scale: 1 },
                        }}
                    ></motion.div>
                </div>
                <div className="text-center w-fit overflow-hidden z-10">
                    <motion.div
                        id="enter-text"
                        className={`${styles.titleText} inline-block`}
                        variants={{
                            initial: { color: "var(--clr-primary)" },
                            hovered: { color: "var(--clr-bg)" },
                        }}
                    >
                        enter
                    </motion.div>
                </div>
                <svg
                    viewBox="0 0 24 24"
                    className="absolute inset-0 stroke-[--clr-bg] stroke-1 fill-none z-20"
                >
                    <motion.path
                        id="check-icon-path"
                        d="M12,21h0a9,9,0,0,1-9-9H3a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9h0A9,9,0,0,1,12,21ZM8,11.5l3,3,5-5"
                        initial={{ pathLength: 0 }}
                    />
                </svg>
            </motion.div>
        </PanelButton>
    );
};
