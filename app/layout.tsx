import "@/styles/globals.css";
import Head from "next/head";
import { Righteous } from "next/font/google";
import { Background } from "@/components";

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
            <Head>
                <title>React Native</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <body
                className={`${righteous.className} scrollbar-thin scrollbar-thumb-slate-700/80 hover:scrollbar-thumb-slate-700 scrollbar-track-slate-300/80`}
            >
                <Background />
                {children}
            </body>
        </html>
    );
}
