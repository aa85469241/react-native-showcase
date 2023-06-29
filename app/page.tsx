"use client";

import { useEffect, useState } from "react";
import { ScrollSection, Navbar, Background, LandingPage } from "@/components";
import { PanelControllerProvider } from "@/context/PanelControllerContext";
import { AnimatePresence } from "framer-motion";

export default function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    });

    return (
        <main className="main max-h-screen h-screen max-w-screen">
            <AnimatePresence>
                {isLoading ? (
                    <LandingPage />
                ) : (
                    <>
                        <Background setIsLoading={setIsLoading} />
                        <Navbar />
                        <PanelControllerProvider>
                            <ScrollSection />
                        </PanelControllerProvider>
                    </>
                )}
            </AnimatePresence>
        </main>
    );
}
