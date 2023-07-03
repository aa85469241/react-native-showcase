"use client";

import { useContext, createContext, useState } from "react";

type LoadingStateProps = {
    loading: boolean;
    setLoading: React.Dispatch<boolean>;
};

const LoadingState = {
    loading: true,
    setLoading: () => {},
};

const LoadingStateContext = createContext<LoadingStateProps>(LoadingState);

export const LoadingStateProvider = ({ children }: { children: any }) => {
    const [loading, setLoading] = useState(true);

    return (
        <LoadingStateContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingStateContext.Provider>
    );
};

export const useLoadingState = () => useContext(LoadingStateContext);
