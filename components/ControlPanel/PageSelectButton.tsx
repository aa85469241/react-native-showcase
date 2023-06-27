import { usePanelController } from "@/context/PanelControllerContext";
import { PanelButton } from "./PanelButton";
import { styles } from "@/styles/style";
import { CONTROL_ACTION } from "@/context/PanelControllerReducer";

export const PageSelectButton = ({
    id,
    className,
}: {
    id: string;
    className?: string;
}) => {
    const { state, dispatch } = usePanelController();

    const handlePageOnChange = (pageName: string) => {
        if (state.power && state.isEnter) {
            dispatch({ type: CONTROL_ACTION.PAGE_SELECTED, payload: pageName });

        }
    };

    return (
        <PanelButton id={id} serialNumber={3} className={className}>
            <div className={`h-full ${styles.flexCenter}`}>
                <button
                    type="button"
                    className={`${
                        styles.halfButtonLeft
                    } group hover:bg-[--clr-primary] hover:m-[0_8px_8px_0] ${
                        state.selectedPage === "python" ? "bg-red-600" : ""
                    } ${
                        state.selectedPage === "python" ? "mb-2" : ""
                    } active:scale-90 ${
                        state.selectedPage === "python"
                            ? "focus:bg-red-600"
                            : ""
                    } duration-300`}
                    onClick={() => handlePageOnChange("python")}
                >
                    <div className="flex justify-center items-end whitespace-nowrap">
                        <div className={`inline ${styles.descriptionText} uppercase group-hover:text-[--clr-bg] whitespace-nowrap`}>
                            p
                        </div>
                        <div className="inline-flex w-0 group-hover:w-full transition-all duration-500 overflow-hidden">
                            <div className={`${styles.descriptionText} group-hover:text-skin-background`}>
                                ython
                            </div>
                        </div>
                    </div>
                </button>
                <button
                    type="button"
                    className={`${
                        styles.halfButtonRight
                    } group hover:bg-[--clr-primary] hover:m-[0_0_8px_8px] ${
                        state.selectedPage === "website" ? "bg-red-600" : ""
                    } ${
                        state.selectedPage === "website" ? "mb-2" : ""
                    } active:scale-90 ${
                        state.selectedPage === "website"
                            ? "focus:bg-red-600"
                            : ""
                    } duration-300`}
                    onClick={() => handlePageOnChange("website")}
                >
                    <div className="flex justify-center items-end whitespace-nowrap">
                        <div className={`inline ${styles.descriptionText} uppercase group-hover:text-[--clr-bg] whitespace-nowrap`}>
                            w
                        </div>
                        <div className="inline-flex w-0 group-hover:w-full transition-all duration-500 overflow-hidden">
                            <div className={`${styles.descriptionText} group-hover:text-skin-background`}>
                                ebsite
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </PanelButton>
    );
};
