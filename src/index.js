import initScrollReveal from "./scripts/scrollReveal";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import TypeIt from "typeit";

initScrollReveal(targetElements, defaultProps);

// new TypeIt("#typewriter", {
//     speed: 80,
//     startDelay: 900,
// }).type('').go();

new TypeIt("#typewriter", {
    speed: 80,
    startDelay: 2500,
}).type('').go();