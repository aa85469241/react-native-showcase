"use client";

import { createContext, useContext, useReducer } from "react";
import { ControlActionProps, reducer } from "./PanelControllerReducer";

const initialState = {
    power: false,
    isEnter: false,
    selectedPage: "",
};

export const PanelControllerContext = createContext<{
    state: {
        power: boolean;
        isEnter: boolean;
        selectedPage: string;
    };
    dispatch: React.Dispatch<ControlActionProps>;
}>({
    state: {
        ...initialState,
    },
    dispatch: () => {},
});

export const PanelControllerProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const providerValue = { state, dispatch };

    return (
        <PanelControllerContext.Provider value={providerValue}>
            {children}
        </PanelControllerContext.Provider>
    );
};

export const usePanelController = () => useContext(PanelControllerContext);
