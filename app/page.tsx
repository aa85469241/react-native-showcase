"use client";

import { useState } from "react";
import { ScrollSection, Navbar, Background, LandingPage } from "@/components";
import { PanelControllerProvider } from "@/context/PanelControllerContext";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <AnimatePresence>
            {loading ? (
                <LandingPage setLoading={setLoading} />
            ) : (
                <motion.main
                    className="main max-h-screen h-screen max-w-screen"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 5 },
                    }}
                    exit={{ opacity: 0 }}
                >
                    <Navbar />
                    <PanelControllerProvider>
                        <ScrollSection />
                    </PanelControllerProvider>
                </motion.main>
            )}
        </AnimatePresence>
    );
}
