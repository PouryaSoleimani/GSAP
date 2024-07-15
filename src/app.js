//* GSAP JAVASCRIPT FILE
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    gsap.to("#box", {
        rotation: 360,
        duration: 1,
        scrollTrigger: {
            trigger: "#box",
            markers: true,
            scrub: true,
        }
    })
    gsap.to("#NEWTEXT", {
        duration: 3,
        text: "WELCOME TO GSAP EVERYBODY !!!!",
        ease: "none",
    })
});