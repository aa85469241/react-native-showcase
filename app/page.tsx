import { ScrollSection, Navbar } from "@/components";
import { PanelControllerProvider } from "@/context/PanelControllerContext";

export default function Home() {
    return (
        <main className="main max-h-screen h-screen max-w-screen">
            <Navbar />
            <PanelControllerProvider>
                <ScrollSection />
            </PanelControllerProvider>
        </main>
    );
}
