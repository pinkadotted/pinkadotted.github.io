import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
// initTiltEffect();



import Typewriter from 'typewriter-effect/dist/core';

new Typewriter('#typewriter', {
    strings: [' Hi, I\'m <span class="color-lavendar">Subesh</span> <br /> Welcome to my page &#x1F44B'],
    autoStart: true,
    loop: false,
    stop: true
});

// var app = document.getElementById('typer');

// var typewriter = new Typewriter(app, {
//   loop: true
// });

// typewriter.start();
