export const styles = {
    bannerText: "text-6xl md:text-5xl lg:text-[144px]",

    headingText: "uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    titleText: "capitalize text-[1.3rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.4rem]",
    descriptionText: "text-sm sm:text-md md:text-lg lg:text-xl",

    flexCenter: "flex items-center justify-center",
    flexStart: "flex justify-start items-center",
    flexEnd: "flex justify-end items-center",
    flexColumns: "flex flex-col",
    absoluteCenter: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",

    horizontal_line: "w-full h-[1px] border-t-4 border-skin-primary border-dotted",
    vertical_line: "w-[1px] h-full border-r-4 border-skin-primary border-dotted ",

    halfButtonLeft: "w-1/2 h-full border border-slate-500/50 rounded-tl-[100px] rounded-bl-[100px] cursor-pointer p-2",
    halfButtonRight: "w-1/2 h-full border border-slate-500/50 rounded-tr-[100px] rounded-br-[100px] cursor-pointer p-2",

    ringCircle: (width: string) => `${width} aspect-square border-2 border-dotted border-slate-500/40 rounded-full`
}