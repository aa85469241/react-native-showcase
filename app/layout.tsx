import Background from "@/components/Background";
import "@/styles/globals.css";
import { Righteous } from "next/font/google";

const righteous = Righteous({
    weight: ["400"],
    subsets: ["latin"],
});

export const metadata = {
    title: "React Native Showcase",
    description: "It's a showcase for react native app.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head></head>
            <body
                className={`${righteous.className} scrollbar-thin scrollbar-thumb-slate-700/80 hover:scrollbar-thumb-slate-700 scrollbar-track-slate-300/80`}
            >
                <Background />
                {children}
            </body>
        </html>
    );
}
