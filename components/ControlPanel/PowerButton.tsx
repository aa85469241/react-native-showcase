import { usePanelController } from "@/context/PanelControllerContext";
import { PanelButton } from "./PanelButton";
import { FiPower } from "react-icons/fi";
import { CONTROL_ACTION } from "@/context/PanelControllerReducer";
import { styles } from "@/styles/style";
import { motion } from "framer-motion";
import Image from "next/image";
import { PowerOutageSign } from "@/public";

const electricity = {
    outage: { opacity: 0, transition: { duration: 0.5 } },
    charge: { opacity: 1, transition: { duration: 0.5 } },
};

export const PowerButton = ({
    id,
    className,
}: {
    id: string;
    className?: string;
}) => {
    const { state, dispatch } = usePanelController();

    return (
        <PanelButton id={id} serialNumber={1} className={className}>
            <button
                className={`absolute top-0 left-0 -translate-x-2 -translate-y-2 p-4 ${
                    state.power ? "shadow-inner" : "shadow z-10"
                } shadow-[--clr-primary] rounded-full bg-[--clr-bg] border border-black/30`}
                onClick={() => dispatch({ type: CONTROL_ACTION.POWER_TOGGLE })}
            >
                <FiPower
                    className={`${state.power ? "opacity-100" : "opacity-50"} ${
                        styles.titleText
                    }`}
                />
            </button>
            <div
                className={`w-full h-full ${styles.flexColumns} items-center justify-center`}
            >
                <div className="w-[50%] h-[30%] flex items-center">
                    <div
                        id="battery-head"
                        className="w-[15%] h-[40%] border-4 border-r-0 border-skin-primary rounded-[5px_0_0_5px]"
                    ></div>
                    <motion.div
                        id="battery-body"
                        className="relative grid grid-cols-4 gap-1 w-full h-full border-2 border-skin-primary bg-[--clr-primary] rounded-lg p-1 py-[2px] overflow-hidden"
                        initial="outage"
                        animate={state.power ? "charge" : "outage"}
                        variants={{
                            outage: {
                                transition: {
                                    staggerChildren: 0.2,
                                    staggerDirection: -1,
                                },
                            },
                            charge: { transition: { staggerChildren: 0.2 } },
                        }}
                    >
                        <motion.div
                            className={`${styles.absoluteCenter} w-1/4 `}
                            variants={{
                                outage: {
                                    opacity: [0, 1, 0],
                                    transition: {
                                        duration: 1.5,
                                        repeat: Infinity,
                                    },
                                },
                                charge: {
                                    opacity: 0,
                                },
                            }}
                        >
                            <Image
                                src={PowerOutageSign}
                                alt="power-outage"
                                className="h-full"
                            />
                        </motion.div>
                        <motion.span
                            className="h-full bg-green-500"
                            variants={electricity}
                        />
                        <motion.span
                            className="h-full bg-green-500"
                            variants={electricity}
                        />
                        <motion.span
                            className="h-full bg-green-500"
                            variants={electricity}
                        />
                        <motion.span
                            className="h-full bg-green-500"
                            variants={electricity}
                        />
                    </motion.div>
                </div>
            </div>
        </PanelButton>
    );
};
