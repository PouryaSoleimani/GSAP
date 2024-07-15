//* GSAP JAVASCRIPT FILE
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to("#box", {
        rotation: 360,
        duration: 2,
        scrollTrigger: {
            trigger: "#box",
            markers: true,
            scrub: true,
        }
    })
});