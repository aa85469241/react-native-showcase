import gsap from "gsap";

export const step1 = gsap.timeline({ paused: true })
    .to("#horizontal-line-path-1", {
        strokeDashoffset: 0,
        duration: 1,
    })
    .to("#enter-button", { opacity: 1, duration: 1 });

export const step2 = gsap.timeline({ paused: true })
    .to("#vertical-line-path-1", {
        strokeDashoffset: 0,
        duration: 1,
    })
    .to("#page-select-button", { opacity: 1, duration: 1 });

export const step3 = gsap.timeline({ paused: true })
    .to("#horizontal-line-path-2", {
        strokeDashoffset: 0,
        duration: 1,
    })
    .to("#enter-button", { opacity: 1, duration: 1 })
    .to("#vertical-line-path-2", { strokeDashoffset: 0, duration: 1 });