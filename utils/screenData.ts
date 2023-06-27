import { HomeScreen, HomeToPython, HomeToWeb, LandingScreen } from "@/public";

export const screens = [
    { id: 1, src: HomeScreen, screenName: "home" },
    { id: 2, src: HomeToPython, screenName: "python" },
    { id: 3, src: HomeToWeb, screenName: "website" },
];

export const quests = [
    "1. Turn on the power.",
    "2. To the home page.",
    "3. Choose the page (python / web).",
    "4. To the expo page and scan the QRcode by your mobile phone. (android suggested)"
]