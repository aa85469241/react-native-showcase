import { ScrollSection, Navbar, PreLoader } from "@/components";
import { LoadingStateProvider } from "@/context/loadingStateContext";

export default function Home() {
    return (
        <div id="main" className="w-screen h-screen">
            <LoadingStateProvider>
                <Navbar />
                <ScrollSection />
                <PreLoader />
            </LoadingStateProvider>
        </div>
    );
}
