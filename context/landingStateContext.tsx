"use client";

import { useContext, createContext, useState } from "react";

type LandingStateProps = {
    isLoading: boolean;
    setLoading: React.Dispatch<boolean>;
};

const LandingState = {
    isLoading: true,
    setLoading: () => {},
};

const LandingStateContext = createContext<LandingStateProps>(LandingState);

export const LandingStateProvider = ({ children }: { children: any }) => {
    const [isLoading, setLoading] = useState(true);

    return (
        <LandingStateContext.Provider value={{ isLoading, setLoading }}>
            {children}
        </LandingStateContext.Provider>
    );
};

export const useLandingState = () => useContext(LandingStateContext);
