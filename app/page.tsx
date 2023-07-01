import { ScrollSection, Navbar, PreLoader } from "@/components";

export default function Home() {
    return (
        <div id="main" className="w-screen h-screen">
            <Navbar />
            <ScrollSection />
            <PreLoader />
        </div>
    );
}
