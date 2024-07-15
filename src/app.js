//* GSAP JAVASCRIPT FILE
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger , TextPlugin)
    gsap.to("#box", {
        rotation: 360,
        duration: 1,
        scrollTrigger: {
            trigger: "#box",
            markers: true,
            scrub: true,
        }
    })
    gsap.to("#HELLO" , {
        y: 100,
        x : 500,
        duration : 3,
        yoyo : true
    })
});